import { PrismaClient } from '../prisma/generated/postgres';

const prisma = new PrismaClient();

async function rollback() {
  console.log('🧹 Suppression des données...');
  await prisma.certificat.deleteMany();
  await prisma.cours.deleteMany();
  await prisma.tutorial.deleteMany();
  await prisma.formation.deleteMany();
  await prisma.user.deleteMany();
  console.log('✅ Données supprimées.');
}

rollback()
  .catch((e) => {
    console.error('❌ Erreur rollback:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
