"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const HttpError_1 = require("./HttpError");
class UnauthorizedError extends HttpError_1.HttpError {
    constructor(message = 'Non autorisé') {
        super(401, message);
    }
}
exports.UnauthorizedError = UnauthorizedError;
