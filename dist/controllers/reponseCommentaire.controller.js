"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReponseCommentaireController = void 0;
const reponseCommentaire_repository_1 = require("../repositories/reponseCommentaire.repository");
class ReponseCommentaireController {
    static async create(req, res) {
        const userId = req.session.user?.id;
        const { contenu, commentaireId } = req.body;
        if (!userId)
            return res.status(401).json({ message: 'Non authentifié' });
        if (!contenu || !commentaireId)
            return res.status(400).json({ message: 'Champs requis manquants' });
        const reponse = await reponseCommentaire_repository_1.reponseCommentaireRepository.create({
            contenu,
            userId,
            commentaireId: Number(commentaireId),
        });
        res.status(201).json(reponse);
    }
    static async getByCommentaire(req, res) {
        const commentaireId = Number(req.params.commentaireId);
        if (isNaN(commentaireId))
            return res.status(400).json({ message: 'ID invalide' });
        const reponses = await reponseCommentaire_repository_1.reponseCommentaireRepository.findByCommentaireId(commentaireId);
        res.json(reponses);
    }
}
exports.ReponseCommentaireController = ReponseCommentaireController;
