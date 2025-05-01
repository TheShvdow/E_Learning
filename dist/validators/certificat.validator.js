"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.certificatSchema = void 0;
// 📁 src/validators/certificat.validator.ts
const zod_1 = require("zod");
exports.certificatSchema = zod_1.z.object({
    titre: zod_1.z.string(),
    apprenantId: zod_1.z.number(),
    tutorialId: zod_1.z.number()
});
