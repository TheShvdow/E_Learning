// 📁 src/config/mailer.ts
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendMail = async (to: string, subject: string, text: string) => {
  await mailer.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
  });
};