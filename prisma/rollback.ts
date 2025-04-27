import { PrismaClient } from '../prisma/generated/postgres';

const prisma = new PrismaClient();

async function rollback() {
  console.log('🧹 Suppression des données...');
  await prisma.reponseCommentaire.deleteMany();
  await prisma.commentaire.deleteMany();
  await prisma.certificat.deleteMany();
  await prisma.coursProgress.deleteMany();
  await prisma.enrollment.deleteMany();
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
