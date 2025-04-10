"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursService = void 0;
const cours_repository_1 = require("../repositories/cours.repository");
exports.coursService = {
    getAll: () => cours_repository_1.coursRepository.getAll(),
    getById: (id) => cours_repository_1.coursRepository.getById(id),
    create: (data) => cours_repository_1.coursRepository.create(data),
    update: (id, data) => cours_repository_1.coursRepository.update(id, data),
    delete: (id) => cours_repository_1.coursRepository.delete(id),
};
