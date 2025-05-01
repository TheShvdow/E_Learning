"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificatRepository = void 0;
// 📁 src/repositories/certificat.repository.ts
const prisma_1 = __importDefault(require("../config/prisma"));
exports.certificatRepository = {
    getAllUserCertificats: async (userId) => prisma_1.default.certificat.findMany({
        where: {
            apprenantId: userId,
        },
    }),
    getById: async (id) => prisma_1.default.certificat.findUnique({ where: { id } }),
    create: async (data) => prisma_1.default.certificat.create({ data }),
};
