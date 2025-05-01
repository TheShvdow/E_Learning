"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
// 📁 src/repositories/user.repository.ts
const prisma_1 = __importDefault(require("../config/prisma"));
exports.userRepository = {
    create: async (data) => {
        return await prisma_1.default.user.create({ data });
    },
    findByEmail: async (email) => {
        return await prisma_1.default.user.findUnique({ where: { email } });
    },
    findByUsername: async (username) => {
        return await prisma_1.default.user.findUnique({ where: { username } });
    },
    findById: async (id) => {
        return await prisma_1.default.user.findUnique({
            where: { id },
            include: {
                certificats: {
                    include: {
                        tutorial: {
                            include: {
                                formation: true,
                            },
                        },
                    },
                },
            },
        });
    },
    findAll: async () => {
        return await prisma_1.default.user.findMany();
    },
    update: async (id, data) => {
        return await prisma_1.default.user.update({ where: { id }, data });
    },
    delete: async (id) => {
        return await prisma_1.default.user.delete({ where: { id } });
    },
    updatePassword: async (id, password) => {
        return await prisma_1.default.user.update({ where: { id }, data: { password } });
    },
};
