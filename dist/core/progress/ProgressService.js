"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressService = void 0;
const ProgressRepository_1 = require("../../infrastructure/repositories/ProgressRepository");
exports.ProgressService = {
    enroll: (userId, tutorialId) => ProgressRepository_1.ProgressRepository.enrollToTutorial(userId, tutorialId),
    complete: (userId, coursId) => ProgressRepository_1.ProgressRepository.markCourseAsCompleted(userId, coursId),
    getProgress: (userId, tutorialId) => ProgressRepository_1.ProgressRepository.getTutorialProgress(userId, tutorialId),
    isEnrolled: (userId, tutorialId) => ProgressRepository_1.ProgressRepository.isEnrolled(userId, tutorialId),
};
