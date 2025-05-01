"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const HttpError_1 = require("./HttpError");
class NotFoundError extends HttpError_1.HttpError {
    constructor(message = 'Ressource non trouvée') {
        super(404, message);
    }
}
exports.NotFoundError = NotFoundError;
