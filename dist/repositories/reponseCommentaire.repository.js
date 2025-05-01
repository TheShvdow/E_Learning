"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reponseCommentaireRepository = void 0;
// 📁 src/repositories/reponseCommentaire.repository.ts
const prisma_1 = __importDefault(require("../config/prisma"));
exports.reponseCommentaireRepository = {
    create: async (data) => {
        return prisma_1.default.reponseCommentaire.create({ data });
    },
    findByCommentaireId: async (commentaireId) => {
        return prisma_1.default.reponseCommentaire.findMany({
            where: { commentaireId },
            include: {
                user: true,
            },
            orderBy: {
                createdAt: 'asc',
            },
        });
    },
};
