"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailService = void 0;
const mailer_1 = require("src/config/mailer");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.mailService = {
    async sendWelcomeEmail(to, username) {
        const subject = "Welcome to Our Service!";
        const text = `Hello ${username},\n\nWelcome to our service! We're glad to have you on board.\n\nBest regards,\nYour Team`;
        await mailer_1.mailer.sendMail({
            from: process.env.MAIL_USER,
            to,
            subject,
            text,
        });
    },
    async sendPasswordResetEmail(to, resetLink) {
        const subject = "Password Reset Request";
        const text = `Hello,\n\nWe received a request to reset your password. Click the link below to reset it:\n${resetLink}\n\nIf you didn't request this, please ignore this email.\n\nBest regards,\nYour Team`;
        await mailer_1.mailer.sendMail({
            from: process.env.MAIL_USER,
            to,
            subject,
            text,
        });
    },
};
