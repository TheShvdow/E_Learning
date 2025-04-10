"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formationService = void 0;
const formation_repository_1 = require("../repositories/formation.repository");
exports.formationService = {
    getAll: () => formation_repository_1.formationRepository.getAll(),
    getById: (id) => formation_repository_1.formationRepository.getById(id),
    create: (data) => formation_repository_1.formationRepository.create(data),
    update: (id, data) => formation_repository_1.formationRepository.update(id, data),
    delete: (id) => formation_repository_1.formationRepository.delete(id),
};
