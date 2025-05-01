"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const PrismaUserRepository_1 = require("../../infrastructure/repositories/PrismaUserRepository");
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
    getFullUserById: (id) => {
        return PrismaUserRepository_1.PrismaUserRepository.findByIdWithRelations(id);
    },
    findPaginated: (page, limit, search) => userRepo.findPaginated(page, limit, search),
    getUserById: (id) => userRepo.findById(id),
    async updateUser(id, data) {
        const updateData = {
            ...data,
            role: data.role ? data.role.toUpperCase() : undefined,
        };
        return userRepo.update(id, updateData);
    },
    getDemandesFormateur: () => PrismaUserRepository_1.PrismaUserRepository.findDemandesFormateur(),
    validerFormateur: (id) => PrismaUserRepository_1.PrismaUserRepository.update(id, { role: 'FORMATEUR', demandeRoleFormateur: false }),
    refuserFormateur: (id) => PrismaUserRepository_1.PrismaUserRepository.update(id, { demandeRoleFormateur: false, etatDemande: 'REFUSEE' }),
    getDemandesFormateurPaginated: (page, limit, search) => PrismaUserRepository_1.PrismaUserRepository.findDemandesFormateurPaginated(page, limit, search),
});
exports.UserService = UserService;
