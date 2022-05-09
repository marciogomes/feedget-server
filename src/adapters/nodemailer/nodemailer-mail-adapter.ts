import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "547cc1d0d5f6b2",
    pass: "123d2d79201673"
  }
});

export class NodemailMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Márcio Aduil <marcioaduil@gmail.com>',
      subject,
      html: body,
    })
  };
}