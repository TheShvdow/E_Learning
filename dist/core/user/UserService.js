"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserService = (userRepo) => ({
    async register(data) {
        const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
        return userRepo.create({
            ...data,
            password: hashedPassword,
            role: data.role,
        });
    },
    async login(password, email, username) {
        const user = await userRepo.findByEmail(email || '') || await userRepo.findByUsername(username || '');
        if (!user)
            return null;
        const match = await bcrypt_1.default.compare(password, user.password);
        return match ? user : null;
    },
    async updatePasswordWithCheck(id, currentPassword, newPassword) {
        const user = await userRepo.findById(id);
        if (!user)
            return false;
        const match = await bcrypt_1.default.compare(currentPassword, user.password);
        if (!match)
            return false;
        const hashed = await bcrypt_1.default.hash(newPassword, 10);
        await userRepo.updatePassword(id, hashed);
        return true;
    },
    async getAllUsers() {
        return userRepo.findAll();
    },
});
exports.UserService = UserService;
