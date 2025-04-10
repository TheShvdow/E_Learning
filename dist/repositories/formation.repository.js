"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formationRepository = void 0;
// 📁 src/repositories/formation.repository.ts
const prisma_1 = __importDefault(require("../config/prisma"));
exports.formationRepository = {
    getAll: async () => prisma_1.default.formation.findMany(),
    getById: async (id) => prisma_1.default.formation.findUnique({ where: { id } }),
    create: async (data) => prisma_1.default.formation.create({ data }),
    update: async (id, data) => prisma_1.default.formation.update({ where: { id }, data }),
    delete: async (id) => prisma_1.default.formation.delete({ where: { id } }),
};
