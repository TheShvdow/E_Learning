"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginSchema = exports.userUpdateSchema = exports.userSchema = void 0;
// 📁 src/validators/user.validator.ts
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    nom: zod_1.z.string().min(2),
    prenom: zod_1.z.string().min(2),
    username: zod_1.z.string().min(3).toLowerCase(),
    email: zod_1.z.string().email().toLowerCase(),
    password: zod_1.z.string().min(8),
    role: zod_1.z.enum(['ADMIN', 'APPRENANT', 'FORMATEUR']).default('APPRENANT'),
    avatar: zod_1.z.string().optional(),
});
exports.userUpdateSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    nom: zod_1.z.string().optional(),
    prenom: zod_1.z.string().optional(),
    username: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    password: zod_1.z.string().min(8).optional(),
    role: zod_1.z.enum(['ADMIN', 'APPRENANT', 'FORMATEUR']).optional(),
    photo: zod_1.z.string().optional(),
});
// This schema is used for login, so we don't need the role
// and we can use either email or username to login
exports.userLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email().toLowerCase().optional(),
    password: zod_1.z.string().min(8),
    username: zod_1.z.string().min(3).optional(),
});
