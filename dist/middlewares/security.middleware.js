"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityMiddleware = void 0;
// 📁 src/middlewares/security.middleware.ts
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.securityMiddleware = [
    (0, helmet_1.default)(),
    (0, cors_1.default)({ origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }),
    (0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per windowMs
        message: 'Trop de requêtes, réessayez plus tard.',
    })
];
