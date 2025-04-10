import { mailer } from "src/config/mailer";
import dotenv from "dotenv";
dotenv.config();

export const mailService = {
 async sendWelcomeEmail(to: string, username: string) {
   const subject = "Welcome to Our Service!";
   const text = `Hello ${username},\n\nWelcome to our service! We're glad to have you on board.\n\nBest regards,\nYour Team`;
   await mailer.sendMail({
     from: process.env.MAIL_USER,
     to,
     subject,
     text,
   });
  
 },
 async sendPasswordResetEmail(to: string, resetLink: string) {
   const subject = "Password Reset Request";
   const text = `Hello,\n\nWe received a request to reset your password. Click the link below to reset it:\n${resetLink}\n\nIf you didn't request this, please ignore this email.\n\nBest regards,\nYour Team`;
   await mailer.sendMail({
     from: process.env.MAIL_USER,
     to,
     subject,
     text,
   });
    },

};