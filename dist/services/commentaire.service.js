"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentaireService = void 0;
// src/core/commentaire/commentaire.service.ts
const commentaire_repository_1 = require("../repositories/commentaire.repository");
exports.CommentaireService = {
    getCommentairesByTutorial: (tutorialId) => commentaire_repository_1.commentaireRepository.findByTutorialId(tutorialId),
    createCommentaire: (contenu, userId, tutorialId) => commentaire_repository_1.commentaireRepository.create({
        contenu,
        userId,
        tutorialId,
    }),
};
