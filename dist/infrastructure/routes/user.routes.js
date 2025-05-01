"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('🚀 Starting user routes from infras ...');
const express_1 = require("express");
const UserController_1 = require("../web/controllers/UserController");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const wrap = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
router.post('/register', wrap(UserController_1.UserController.register));
router.post('/login', wrap(UserController_1.UserController.login));
router.get('/me', auth_middleware_1.isAuthenticated, wrap(UserController_1.UserController.me));
router.get('/me/full', auth_middleware_1.isAuthenticated, wrap(UserController_1.UserController.getFullUser));
router.post('/logout', auth_middleware_1.isAuthenticated, wrap(UserController_1.UserController.logout));
router.get('/paginated', wrap(UserController_1.UserController.getPaginated));
router.get('/admin', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), (req, res) => {
    res.json({ message: 'Bienvenue Admin' });
});
router.get('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(UserController_1.UserController.getById));
router.put('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(UserController_1.UserController.update));
router.get('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(UserController_1.UserController.getAllUsers)); // Modifié
router.post('/demander-formateur', auth_middleware_1.isAuthenticated, wrap(UserController_1.UserController.demanderFormateur));
router.post('/valider-formateur/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(UserController_1.UserController.validerFormateur));
router.get('/demandes-formateur/paginated', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(UserController_1.UserController.getDemandesFormateurPaginated));
// src/infrastructure/routes/user.routes.ts
router.post('/demandes-formateur/:id/valider', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(UserController_1.UserController.validerDemandeFormateur));
router.post('/demandes-formateur/:id/refuser', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(UserController_1.UserController.refuserDemandeFormateur));
exports.default = router;
