import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { subject, message, from } = req.body;

  if (!subject || !message || !from) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Send notification email to Claudia with form details
    await resend.emails.send({
      from: "website@regrouppartners.com",
      to: "claudia@regrouppartners.com",
      replyTo: from,
      subject: subject,
      text: message,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "website@regrouppartners.com",
      to: from,
      subject: "Thank you for contacting REgroup Partners",
      text: `Dear Valued Client,

Thank you for reaching out to REgroup Partners. We have received your inquiry and appreciate you taking the time to contact us.

A member of our team will review your submission and reach out to you shortly to discuss how we can assist with your business needs.

In the meantime, if you have any urgent questions, please don't hesitate to contact us directly at:

Phone: (555) 123-4567
Email: claudia@regrouppartners.com

We look forward to speaking with you soon.

Best regards,
The REgroup Partners Team

---
This is an automated confirmation. Please do not reply to this email.`,
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}