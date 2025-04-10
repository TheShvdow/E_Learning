"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialService = void 0;
const tutorial_repository_1 = require("../repositories/tutorial.repository");
exports.tutorialService = {
    getAll: () => tutorial_repository_1.tutorialRepository.getAll(),
    getById: (id) => tutorial_repository_1.tutorialRepository.getById(id),
    create: (data) => tutorial_repository_1.tutorialRepository.create(data),
    update: (id, data) => tutorial_repository_1.tutorialRepository.update(id, data),
    delete: (id) => tutorial_repository_1.tutorialRepository.delete(id),
};
