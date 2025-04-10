"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursRepository = void 0;
// 📁 src/repositories/cours.repository.ts
const prisma_1 = __importDefault(require("../config/prisma"));
exports.coursRepository = {
    getAll: async () => prisma_1.default.cours.findMany(),
    getById: async (id) => prisma_1.default.cours.findUnique({ where: { id } }),
    create: async (data) => prisma_1.default.cours.create({ data }),
    update: async (id, data) => prisma_1.default.cours.update({ where: { id }, data }),
    delete: async (id) => prisma_1.default.cours.delete({ where: { id } }),
};
