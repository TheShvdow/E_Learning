"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentaireRepository = void 0;
// src/repositories/commentaire.repository.ts
const prisma_1 = __importDefault(require("../config/prisma"));
exports.commentaireRepository = {
    findByTutorialId: async (tutorialId) => {
        return prisma_1.default.commentaire.findMany({
            where: { tutorialId },
            include: {
                user: true,
                reponses: {
                    include: {
                        user: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    },
    create: async (data) => {
        return prisma_1.default.commentaire.create({ data });
    },
};
