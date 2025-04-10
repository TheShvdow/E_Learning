"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
exports.PrismaUserRepository = {
    create: async (data) => {
        return await prisma_1.default.user.create({ data });
    },
    findByEmail: async (email) => {
        return prisma_1.default.user.findUnique({ where: { email } });
    },
    findByUsername: async (username) => {
        return prisma_1.default.user.findUnique({ where: { username } });
    },
    findById: async (id) => {
        return prisma_1.default.user.findUnique({ where: { id } });
    },
    findAll: async () => {
        return prisma_1.default.user.findMany();
    },
    update: async (id, data) => {
        return prisma_1.default.user.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        await prisma_1.default.user.delete({ where: { id } });
    },
    updatePassword: async (id, hashedPassword) => {
        await prisma_1.default.user.update({
            where: { id },
            data: { password: hashedPassword },
        });
    },
};
