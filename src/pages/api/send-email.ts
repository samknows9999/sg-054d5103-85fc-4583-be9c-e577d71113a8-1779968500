import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limiter";
import { checkForSpam } from "@/lib/spam-detection";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { verifyTurnstile } from "@/lib/turnstile";
import { logBlockedSubmission, logSuccessfulSubmission } from "@/lib/submission-logger";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper to get client IP
function getClientIP(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded 
    ? (typeof forwarded === 'string' ? forwarded.split(',')[0] : forwarded[0])
    : req.socket.remoteAddress || 'unknown';
  return ip;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const clientIP = getClientIP(req);
  console.log(`[EMAIL API] Received request from IP: ${clientIP}`);

  const { 
    subject, 
    message, 
    from, 
    customerName, 
    companyName, 
    phone,
    recaptchaToken,
    turnstileToken,
    honeypot 
  } = req.body;

  // HONEYPOT CHECK - Silent rejection
  if (honeypot) {
    console.log(`[SPAM BLOCK] Honeypot triggered from IP: ${clientIP}, Email: ${from}`);
    logBlockedSubmission(clientIP, from || 'unknown', req.body, 'Honeypot field filled');
    return res.status(200).json({ message: "Request received" });
  }

  // Basic validation
  if (!subject || !message || !from) {
    console.error("[EMAIL API] Missing required fields:", { 
      subject: !!subject, 
      message: !!message, 
      from: !!from 
    });
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[EMAIL API] RESEND_API_KEY not configured");
    return res.status(500).json({ message: "Email service not configured" });
  }

  try {
    // 1. CLOUDFLARE TURNSTILE VERIFICATION (PRIMARY CAPTCHA)
    if (turnstileToken) {
      const turnstileResult = await verifyTurnstile(turnstileToken);
      if (!turnstileResult.valid) {
        console.log(`[SPAM BLOCK] Turnstile verification failed from IP: ${clientIP}`);
        logBlockedSubmission(
          clientIP,
          from,
          req.body,
          `Turnstile verification failed: ${turnstileResult.error}`
        );
        return res.status(400).json({
          message: "Security verification failed. Please try again or contact us directly at (954) 354-1800."
        });
      }
      console.log(`[SECURITY] Turnstile verification passed`);
    } else if (process.env.TURNSTILE_SECRET_KEY) {
      // If Turnstile is configured but no token provided, block
      console.log(`[SPAM BLOCK] Missing Turnstile token from IP: ${clientIP}`);
      logBlockedSubmission(clientIP, from, req.body, 'Missing Turnstile verification token');
      return res.status(400).json({
        message: "Security verification required. Please complete the security check."
      });
    }

    // 2. RECAPTCHA VERIFICATION (FALLBACK - Optional)
    let recaptchaScore = undefined;
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.valid) {
        console.log(`[SPAM BLOCK] reCAPTCHA failed from IP: ${clientIP}, Score: ${recaptchaResult.score}`);
        logBlockedSubmission(
          clientIP,
          from,
          req.body,
          `reCAPTCHA verification failed: ${recaptchaResult.error}`,
          undefined,
          recaptchaResult.score
        );
        return res.status(400).json({
          message: "Security verification failed. You may be identified as a bot. Please try again or contact us directly."
        });
      }
      recaptchaScore = recaptchaResult.score;
      console.log(`[SECURITY] reCAPTCHA passed with score: ${recaptchaScore}`);
    }

    // 3. RATE LIMITING
    const rateLimitResult = await checkRateLimit(clientIP, from);
    if (!rateLimitResult.allowed) {
      console.log(`[SPAM BLOCK] Rate limit exceeded from IP: ${clientIP}, Email: ${from}`);
      logBlockedSubmission(
        clientIP, 
        from, 
        req.body, 
        'Rate limit exceeded',
        undefined,
        recaptchaScore
      );
      return res.status(429).json({ 
        message: rateLimitResult.reason,
        retryAfter: rateLimitResult.retryAfter
      });
    }

    // 4. SPAM CONTENT DETECTION
    const spamCheck = checkForSpam({
      email: from,
      companyName,
      contactName: customerName,
      financialConcerns: message,
      phone
    });

    // CRITICAL: Block if spam score > 10
    if (spamCheck.isSpam || spamCheck.score > 10) {
      console.log(`[SPAM BLOCK] Spam detected from IP: ${clientIP}, Email: ${from}`);
      console.log(`[SPAM BLOCK] Spam Score: ${spamCheck.score}, Reasons: ${spamCheck.reasons.join(', ')}`);
      logBlockedSubmission(
        clientIP,
        from,
        req.body,
        spamCheck.reasons.join('; '),
        spamCheck.score,
        recaptchaScore
      );
      return res.status(400).json({ 
        message: "Your submission was flagged by our security system. Please ensure all information is accurate and try again, or contact us directly at (954) 354-1800." 
      });
    }

    // Extract first name for personalization
    const firstName = customerName ? customerName.split(' ')[0] : 'Valued Client';

    console.log("[EMAIL API] All anti-spam checks passed. Sending emails...");

    // Send notification email to Claudia with form details
    const claudiaEmail = await resend.emails.send({
      from: "website@regrouppartners.com",
      to: "claudia@regrouppartners.com",
      replyTo: from,
      subject: subject,
      text: `${message}\n\n--- Security Info ---\nIP: ${clientIP}\nreCAPTCHA Score: ${recaptchaScore}\nSpam Score: ${spamCheck.score}`,
    });
    console.log("[EMAIL API] Notification sent to Claudia:", claudiaEmail);

    // Send branded HTML confirmation email to the customer
    const customerEmail = await resend.emails.send({
      from: "Regroup Partners <noreply@regrouppartners.com>",
      to: from,
      subject: "Thank You for Contacting Regroup Partners",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Regroup Partners</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8B1538 0%, #6B1028 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">Thank You for Contacting Us</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; color: #0A192F; font-size: 16px; line-height: 1.6;">Dear ${firstName},</p>
              
              <p style="margin: 0 0 20px; color: #0A192F; font-size: 16px; line-height: 1.6;">Thank you for reaching out to <strong>Regroup Partners</strong>. We have received your inquiry and appreciate you taking the time to contact us.</p>
              
              <p style="margin: 0 0 20px; color: #0A192F; font-size: 16px; line-height: 1.6;">A member of our team will review your submission and reach out to you shortly to discuss how we can assist with your business needs.</p>
              
              <p style="margin: 0 0 30px; color: #0A192F; font-size: 16px; line-height: 1.6;">In the meantime, if you have any urgent questions, please don't hesitate to contact us directly:</p>
              
              <!-- Contact Info -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0 0 30px; background-color: #f8f9fa; border-radius: 6px; padding: 20px;">
                <tr>
                  <td style="padding: 0;">
                    <p style="margin: 0 0 10px; color: #0A192F; font-size: 15px; line-height: 1.5;">
                      <strong>Phone:</strong> <a href="tel:+19543541800" style="color: #8B1538; text-decoration: none;">(954) 354-1800</a>
                    </p>
                    <p style="margin: 0; color: #0A192F; font-size: 15px; line-height: 1.5;">
                      <strong>Email:</strong> <a href="mailto:claudia@regrouppartners.com" style="color: #8B1538; text-decoration: none;">claudia@regrouppartners.com</a>
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Button -->
              <table role="presentation" style="margin: 0 0 30px;">
                <tr>
                  <td style="text-align: center;">
                    <a href="https://regrouppartners.com" style="display: inline-block; background-color: #8B1538; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: 600; transition: background-color 0.2s;">Visit Our Website</a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 20px; color: #0A192F; font-size: 16px; line-height: 1.6;">We look forward to speaking with you soon.</p>
              
              <p style="margin: 0; color: #0A192F; font-size: 16px; line-height: 1.6;">Best regards,<br><strong>The Regroup Partners Team</strong></p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px; color: #6b7280; font-size: 14px; line-height: 1.5;">
                © 2026 Regroup Partners. All rights reserved.
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 13px; line-height: 1.5;">
                This is an automated confirmation. Please do not reply to this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });
    console.log("[EMAIL API] Confirmation sent to customer:", customerEmail);

    // Log successful submission
    logSuccessfulSubmission(clientIP, from, req.body, recaptchaScore);

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("[EMAIL API] Error sending email:", error);
    logBlockedSubmission(
      clientIP, 
      from, 
      req.body, 
      `Server error: ${error instanceof Error ? error.message : 'Unknown'}`,
      undefined,
      undefined
    );
    return res.status(500).json({ 
      message: "Failed to send email", 
      error: error instanceof Error ? error.message : "Unknown error" 
    });
  }
}