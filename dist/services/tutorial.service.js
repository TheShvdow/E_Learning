"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialService = void 0;
const tutorial_repository_1 = require("../repositories/tutorial.repository");
exports.tutorialService = {
    getAll: () => tutorial_repository_1.tutorialRepository.getAll(),
    getById: (id, userId) => tutorial_repository_1.tutorialRepository.getById(id, userId),
    getByFormationId: (formationId) => tutorial_repository_1.tutorialRepository.getByFormationId(formationId), // ✅ ajout ici
    getByUserId: async (userId) => {
        return tutorial_repository_1.tutorialRepository.getByUserId(userId);
    },
    create: (data) => tutorial_repository_1.tutorialRepository.create(data),
    update: (id, data) => tutorial_repository_1.tutorialRepository.update(id, data),
    delete: (id) => tutorial_repository_1.tutorialRepository.delete(id),
    findById: (id) => tutorial_repository_1.tutorialRepository.findById(id),
};
