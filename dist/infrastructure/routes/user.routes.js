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
router.post('/logout', auth_middleware_1.isAuthenticated, wrap(UserController_1.UserController.logout));
router.get('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(UserController_1.UserController.getAllUsers));
router.post('/test', (req, res) => {
    res.json({ message: 'ça marche' });
});
exports.default = router;
