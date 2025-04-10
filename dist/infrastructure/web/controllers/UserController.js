"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_validator_1 = require("../../../validators/user.validator");
const PrismaUserRepository_1 = require("../../repositories/PrismaUserRepository");
const UserService_1 = require("../../../core/user/UserService");
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
            role: user.role,
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
}
exports.UserController = UserController;
