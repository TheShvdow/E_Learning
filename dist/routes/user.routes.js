"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importer les dépendances nécessaires
const security_middleware_1 = require("./../middlewares/security.middleware");
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const userController = new user_controller_1.UserController();
const wrap = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
};
router.post('/register', security_middleware_1.securityMiddleware, wrap(userController.register));
router.post('/login', wrap(userController.login)); // Modifié
router.get('/me', auth_middleware_1.isAuthenticated, wrap(userController.me)); // Modifié
router.post('/logout', auth_middleware_1.isAuthenticated, wrap(userController.logout)); // Modifié
// Exemple avec vérification de rôle
router.get('/admin', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), (req, res) => {
    res.json({ message: 'Bienvenue Admin' });
});
router.get('/users', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(userController.getAllUsers)); // Modifié
exports.default = router;
