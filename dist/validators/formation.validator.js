"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formationSchema = void 0;
// 📁 src/validators/formation.validator.ts
const zod_1 = require("zod");
exports.formationSchema = zod_1.z.object({
    nomFormation: zod_1.z.string().min(3),
    description: zod_1.z.string(),
    photo: zod_1.z.string().url()
});
