"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialRepository = void 0;
// 📁 src/repositories/tutorial.repository.ts
const prisma_1 = __importDefault(require("../config/prisma"));
exports.tutorialRepository = {
    getAll: async () => prisma_1.default.tutorial.findMany(),
    getById: async (id) => prisma_1.default.tutorial.findUnique({ where: { id } }),
    create: async (data) => prisma_1.default.tutorial.create({ data }),
    update: async (id, data) => prisma_1.default.tutorial.update({ where: { id }, data }),
    delete: async (id) => prisma_1.default.tutorial.delete({ where: { id } }),
};
