"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificatService = void 0;
const certificat_repository_1 = require("../repositories/certificat.repository");
const pdfGenerator_1 = require("../utils/pdfGenerator");
exports.certificatService = {
    getAllForUser: (userId) => certificat_repository_1.certificatRepository.getAllUserCertificats(userId),
    getById: (id) => certificat_repository_1.certificatRepository.getById(id),
    generateAndSave: async ({ titre, nom, prenom, userId }) => {
        const date = new Date().toLocaleDateString();
        const pdfPath = (0, pdfGenerator_1.generateCertificatPDF)({ nom, prenom, titre, date });
        const saved = await certificat_repository_1.certificatRepository.create({
            titre,
            apprenantId: userId,
            tutorialId: 0, // à remplacer par vrai ID
            dateObtention: new Date(),
        });
        return { ...saved, file: pdfPath };
    },
};
