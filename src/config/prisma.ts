// file : src/config/prisma.ts
import { PrismaClient } from '../../prisma/generated/postgres';

const prisma = new PrismaClient();

export default prisma;

