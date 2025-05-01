"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// file : src/config/prisma.ts
const postgres_1 = require("../../prisma/generated/postgres");
const prisma = new postgres_1.PrismaClient();
exports.default = prisma;
