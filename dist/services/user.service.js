"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.userService = {
    async register(data) {
        const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
        return user_repository_1.userRepository.create({ ...data, password: hashedPassword });
    },
    async login(password, email, username) {
        const user = await user_repository_1.userRepository.findByEmail(email || '') || await user_repository_1.userRepository.findByUsername(username || '');
        if (!user)
            return null;
        const match = await bcrypt_1.default.compare(password, user.password);
        return match ? user : null;
    },
    async me(userId) {
        const user = await user_repository_1.userRepository.findByEmail(userId);
        if (!user)
            return null;
        return user;
    },
    async logout() {
        return { success: true };
    },
    async getAllUsers() {
        return user_repository_1.userRepository.findAll();
    },
    async updateUser(id, data) {
        return user_repository_1.userRepository.update(id, data);
    },
    async deleteUser(id) {
        return user_repository_1.userRepository.delete(id);
    },
    async updatePassword(id, password) {
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        return user_repository_1.userRepository.updatePassword(id, hashedPassword);
    },
    async updatePasswordWithCheck(id, currentPassword, newPassword) {
        const user = await user_repository_1.userRepository.findById(id);
        if (!user)
            return false;
        const match = await bcrypt_1.default.compare(currentPassword, user.password);
        if (!match)
            return false;
        const hashed = await bcrypt_1.default.hash(newPassword, 10);
        await user_repository_1.userRepository.updatePassword(id, hashed);
        return true;
    },
    async findByEmailOrUsername(email, username) {
        const user = await user_repository_1.userRepository.findByEmail(email) || await user_repository_1.userRepository.findByUsername(username);
        return user;
    },
};
