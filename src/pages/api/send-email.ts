import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { subject, message, from, customerName } = req.body;

  console.log("[EMAIL API] Received request:", { subject, from, customerName, hasMessage: !!message });

  if (!subject || !message || !from) {
    console.error("[EMAIL API] Missing required fields:", { subject: !!subject, message: !!message, from: !!from });
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[EMAIL API] RESEND_API_KEY not configured");
    return res.status(500).json({ message: "Email service not configured" });
  }

  // Extract first name for personalization
  const firstName = customerName ? customerName.split(' ')[0] : 'Valued Client';

  try {
    console.log("[EMAIL API] Sending notification to Claudia...");
    // Send notification email to Claudia with form details
    const claudiaEmail = await resend.emails.send({
      from: "website@regrouppartners.com",
      to: "claudia@regrouppartners.com",
      replyTo: from,
      subject: subject,
      text: message,
    });
    console.log("[EMAIL API] Notification sent to Claudia:", claudiaEmail);

    console.log("[EMAIL API] Sending confirmation to customer:", from);
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

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("[EMAIL API] Error sending email:", error);
    console.error("[EMAIL API] Error details:", JSON.stringify(error, null, 2));
    return res.status(500).json({ message: "Failed to send email", error: error instanceof Error ? error.message : "Unknown error" });
  }
}