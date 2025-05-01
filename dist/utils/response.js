"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
const success = (res, data = null, message = 'Opération réussie') => {
    return res.status(200).json({ success: true, message, data });
};
exports.success = success;
const error = (res, status = 500, message = 'Erreur serveur', details = null) => {
    return res.status(status).json({ success: false, message, details });
};
exports.error = error;
