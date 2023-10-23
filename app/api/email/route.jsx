import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/email-template";

export async function POST(request) {
  const { name, email, title, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const emailHtml = render(
    <EmailTemplate
      firstName={name}
      email={email}
      title={title}
      message={message}
    />
  );
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: "hello world",
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
}
