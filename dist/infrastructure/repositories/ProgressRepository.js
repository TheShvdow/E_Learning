"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressRepository = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
exports.ProgressRepository = {
    enrollToTutorial: async (userId, tutorialId) => {
        return prisma_1.default.enrollment.upsert({
            where: { userId_tutorialId: { userId, tutorialId } },
            update: {},
            create: { userId, tutorialId }
        });
    },
    markCourseAsCompleted: async (userId, coursId) => {
        return prisma_1.default.coursProgress.upsert({
            where: { userId_coursId: { userId, coursId } },
            update: { completed: true },
            create: { userId, coursId, completed: true }
        });
    },
    getTutorialProgress: async (userId, tutorialId) => {
        const total = await prisma_1.default.cours.count({ where: { tutorialId } });
        const completed = await prisma_1.default.coursProgress.count({
            where: { userId, cours: { tutorialId }, completed: true }
        });
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        return { total, completed, percent };
    },
    isEnrolled: async (userId, tutorialId) => {
        const enrollment = await prisma_1.default.enrollment.findUnique({
            where: { userId_tutorialId: { userId, tutorialId } }
        });
        return Boolean(enrollment);
    }
};
