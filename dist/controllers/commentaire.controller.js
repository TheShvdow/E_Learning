"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentaireController = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
class CommentaireController {
    //   static async getByTutorial(req: Request, res: Response) {
    //     const tutorialId = parseInt(req.params.tutorialId);
    //     const commentaires = await CommentaireService.getCommentairesByTutorial(tutorialId);
    //     res.json(commentaires);
    //   }
    static async getByTutorial(req, res) {
        const tutorialId = parseInt(req.params.tutorialId, 10);
        const commentaires = await prisma_1.default.commentaire.findMany({
            where: { tutorialId },
            include: {
                user: {
                    select: {
                        id: true,
                        nom: true,
                        prenom: true,
                        avatar: true,
                        role: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.json(commentaires);
    }
    //   static async create(req: Request, res: Response) {
    //     const userId = req.session.user?.id;
    //     const { contenu, tutorialId } = req.body;
    //     if (!userId) return res.status(401).json({ message: 'Non authentifié' });
    //     const commentaire = await CommentaireService.createCommentaire(
    //       contenu,
    //       userId,
    //       tutorialId
    //     );
    //     res.status(201).json(commentaire);
    //   }
    static async create(req, res) {
        const userId = req.session.user?.id;
        const tutorialId = parseInt(req.params.tutorialId, 10);
        const { contenu } = req.body;
        if (!userId)
            return res.status(401).json({ message: 'Utilisateur non authentifié' });
        if (!contenu)
            return res.status(400).json({ message: 'Contenu requis' });
        const commentaire = await prisma_1.default.commentaire.create({
            data: {
                contenu,
                userId, // ✅ maintenant sûr que c’est une string
                tutorialId,
            },
        });
        res.status(201).json(commentaire);
    }
}
exports.CommentaireController = CommentaireController;
