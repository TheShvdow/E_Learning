"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_validator_1 = require("../../../validators/user.validator");
const PrismaUserRepository_1 = require("../../repositories/PrismaUserRepository");
const UserService_1 = require("../../../core/user/UserService");
const UserMapper_1 = require("../../web/mappers/UserMapper");
const postgres_1 = require("../../../../prisma/generated/postgres"); // Adapte le chemin si nécessaire
const service = (0, UserService_1.UserService)(PrismaUserRepository_1.PrismaUserRepository);
class UserController {
    static async register(req, res) {
        const parsed = user_validator_1.userSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json(parsed.error.format());
        const user = await service.register(parsed.data);
        res.status(201).json(user);
    }
    static async login(req, res) {
        const parsed = user_validator_1.userLoginSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json(parsed.error.format());
        const { email, password, username } = parsed.data;
        const user = await service.login(password, email, username);
        if (!user)
            return res.status(401).json({ message: 'Identifiants invalides' });
        req.session.user = {
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            username: user.username,
            role: user.role,
            avatar: user.avatar || '',
            bio: user.bio || ''
        };
        req.session.save((err) => {
            if (err)
                return res.status(500).json({ message: 'Erreur session' });
            res.json({ message: 'Connecté', user: req.session.user });
        });
    }
    static async me(req, res) {
        if (!req.session.user)
            return res.status(401).json({ message: 'Non authentifié' });
        res.json(req.session.user);
    }
    static async logout(req, res) {
        req.session.destroy((err) => {
            if (err)
                return res.status(500).json({ message: 'Erreur de déconnexion' });
            res.clearCookie('connect.sid');
            res.json({ message: 'Déconnexion réussie' });
        });
    }
    static async getAllUsers(req, res) {
        const users = await service.getAllUsers();
        res.json(users);
    }
    static async getFullUser(req, res) {
        if (!req.session.user)
            return res.status(401).json({ message: 'Non authentifié' });
        const fullUser = await service.getFullUserById(req.session.user.id);
        if (!fullUser)
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        const dto = UserMapper_1.UserMapper.toFullDTO(fullUser);
        res.json({
            message: 'Utilisateur trouvé',
            user: dto,
        });
    }
    static async getPaginated(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search;
        const { users, total } = await service.findPaginated(page, limit, search);
        res.json({
            users,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    }
    static async getById(req, res) {
        const id = req.params.id;
        const user = await service.getUserById(id);
        if (!user)
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        res.json(user);
    }
    static async update(req, res) {
        const id = req.params.id;
        const data = req.body;
        const updated = await service.updateUser(id, data);
        res.json(updated);
    }
    static async getDemandesFormateur(req, res) {
        const demandes = await service.getDemandesFormateur();
        res.json(demandes);
    }
    static async validerFormateur(req, res) {
        const { id } = req.params;
        await service.validerFormateur(id);
        res.json({ message: 'Utilisateur promu au rôle de FORMATEUR' });
    }
    static async demanderFormateur(req, res) {
        const userId = req.session.user?.id;
        const { motivation, experienceProfessionnelle, portfolioUrl, cvUrl } = req.body;
        if (!userId)
            return res.status(401).json({ message: 'Non authentifié' });
        await PrismaUserRepository_1.PrismaUserRepository.update(userId, {
            demandeRoleFormateur: true,
            motivationFormateur: motivation,
            experienceProfessionnelle,
            portfolioUrl,
            cvUrl,
        });
        res.json({ message: 'Demande envoyée avec succès.' });
    }
    static async refuserFormateur(req, res) {
        const { id } = req.params;
        await service.refuserFormateur(id);
        res.json({ message: 'Demande refusée avec succès.' });
    }
    static async getDemandesFormateurPaginated(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search;
        const result = await service.getDemandesFormateurPaginated(page, limit, search);
        res.json(result);
    }
    static async validerDemandeFormateur(req, res) {
        const { id } = req.params;
        await PrismaUserRepository_1.PrismaUserRepository.update(id, {
            role: postgres_1.Role.FORMATEUR,
            etatDemande: 'ACCEPTEE',
            demandeRoleFormateur: false,
        });
        res.json({ message: 'Demande validée. Utilisateur promu Formateur.' });
    }
    static async refuserDemandeFormateur(req, res) {
        const { id } = req.params;
        await PrismaUserRepository_1.PrismaUserRepository.update(id, {
            etatDemande: 'REFUSEE',
            demandeRoleFormateur: false,
        });
        res.json({ message: 'Demande refusée.' });
    }
}
exports.UserController = UserController;
