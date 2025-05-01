"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        res.status(401).json({ message: 'Non autorisé' });
        return;
    }
    next();
};
exports.isAuthenticated = isAuthenticated;
const hasRole = (role) => {
    return (req, res, next) => {
        if (!req.session.user || req.session.user.role !== role) {
            res.status(403).json({ message: 'Accès interdit' });
            return;
        }
        next();
    };
};
exports.hasRole = hasRole;
