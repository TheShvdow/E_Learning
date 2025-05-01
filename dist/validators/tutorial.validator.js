"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialSchema = void 0;
// 📁 src/validators/tutorial.validator.ts
const zod_1 = require("zod");
exports.tutorialSchema = zod_1.z.object({
    titreTuto: zod_1.z.string(),
    descriptionTuto: zod_1.z.string(),
    photo: zod_1.z.string().url(),
    formationId: zod_1.z.number()
});
