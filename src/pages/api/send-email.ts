import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { subject, message, from } = req.body;

  console.log("[EMAIL API] Received request:", { subject, from, hasMessage: !!message });

  if (!subject || !message || !from) {
    console.error("[EMAIL API] Missing required fields:", { subject: !!subject, message: !!message, from: !!from });
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[EMAIL API] RESEND_API_KEY not configured");
    return res.status(500).json({ message: "Email service not configured" });
  }

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
    // Send confirmation email to the customer
    const customerEmail = await resend.emails.send({
      from: "website@regrouppartners.com",
      to: from,
      subject: "Thank you for contacting REgroup Partners",
      text: `Dear Valued Client,

Thank you for reaching out to REgroup Partners. We have received your inquiry and appreciate you taking the time to contact us.

A member of our team will review your submission and reach out to you shortly to discuss how we can assist with your business needs.

In the meantime, if you have any urgent questions, please don't hesitate to contact us directly at:

Phone: (855) 347-6874
Email: claudia@regrouppartners.com

We look forward to speaking with you soon.

Best regards,
The REgroup Partners Team

---
This is an automated confirmation. Please do not reply to this email.`,
    });
    console.log("[EMAIL API] Confirmation sent to customer:", customerEmail);

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("[EMAIL API] Error sending email:", error);
    console.error("[EMAIL API] Error details:", JSON.stringify(error, null, 2));
    return res.status(500).json({ message: "Failed to send email", error: error instanceof Error ? error.message : "Unknown error" });
  }
}