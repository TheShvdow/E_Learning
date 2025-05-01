"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const user_validator_1 = require("../validators/user.validator");
class UserController {
    async register(req, res) {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await user_service_1.userService.findByEmailOrUsername(req.body.email, req.body.username);
        if (existingUser) {
            return res.status(400).json({ message: 'un email de confirmartion vous a été envoyé veillez verifier votre boite mail' });
            //await mailService.sendConfirmationEmail(req.body.email);
        }
        const parsed = user_validator_1.userSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json(parsed.error);
        const user = await user_service_1.userService.register(parsed.data);
        res.status(201).json(user);
        // await mailService.sendWelcomeEmail(user.email , user.username);
    }
    async login(req, res) {
        const payload = user_validator_1.userLoginSchema.safeParse(req.body);
        const user = await user_service_1.userService.login(payload.data.password, payload.data.email, payload.data.username);
        if (!user)
            return res.status(401).json({ message: 'Invalid credentials' });
        // Définir la session avec un callback
        req.session.user = {
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            username: user.username,
            role: user.role,
            avatar: user.avatar || '',
            bio: user.bio || '',
        };
        req.session.save((err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving session' });
            }
            res.json(user);
        });
    }
    async me(req, res) {
        if (!req.session.user)
            return res.status(401).json({ message: 'Unauthorized' });
        res.json(req.session.user);
    }
    async logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Error destroying session' });
            }
            res.json({ message: 'Logout successful' });
        });
    }
    async getAllUsers(req, res) {
        const users = await user_service_1.userService.getAllUsers();
        res.json(users);
    }
    async changePassword(req, res) {
        const { currentPassword, newPassword } = req.body;
        const userId = req.session.user?.id;
        if (!userId || !currentPassword || !newPassword) {
            return res.status(400).json({ message: 'Champs manquants' });
        }
        const success = await user_service_1.userService.updatePasswordWithCheck(userId, currentPassword, newPassword);
        if (!success) {
            return res.status(401).json({ message: 'Mot de passe actuel incorrect' });
        }
        res.json({ message: 'Mot de passe mis à jour avec succès' });
    }
}
exports.UserController = UserController;
