"use strict";
// import { PrismaClient as MongoPrismaClient } from '../../prisma/generated/mongo';
// import { PrismaClient as PostgresPrismaClient } from '../../prisma/generated/postgres';
Object.defineProperty(exports, "__esModule", { value: true });
// const provider = process.env.DATABASE_PROVIDER;
// let prisma: MongoPrismaClient | PostgresPrismaClient;
// if (provider === 'postgresql') {
//   prisma = new PostgresPrismaClient();
// } else {
//   prisma = new MongoPrismaClient();
// }
// export type AppPrismaClient = MongoPrismaClient | PostgresPrismaClient;
// export default prisma;
// 📁 src/config/prisma.ts
const postgres_1 = require("../../prisma/generated/postgres");
const prisma = new postgres_1.PrismaClient();
exports.default = prisma;
