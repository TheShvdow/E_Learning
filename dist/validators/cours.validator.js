"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursSchema = void 0;
// 📁 src/validators/cours.validator.ts
const zod_1 = require("zod");
exports.coursSchema = zod_1.z.object({
    titreCours: zod_1.z.string(),
    content: zod_1.z.string(),
    photo: zod_1.z.string().url(),
    tutorialId: zod_1.z.number()
});
