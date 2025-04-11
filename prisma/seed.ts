import { PrismaClient } from '../prisma/generated/postgres';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { Role } from '../prisma/generated/postgres';

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

async function seed() {
  console.log('🌱 Lancement du seed...');

  // Supprimer les données existantes (rollback simple)
  await prisma.certificat.deleteMany();
  await prisma.cours.deleteMany();
  await prisma.tutorial.deleteMany();
  await prisma.formation.deleteMany();
  await prisma.user.deleteMany();

  // Créer 1 admin
  await prisma.user.create({
    data: {
      nom: 'Admin',
      prenom: 'Super',
      username: 'admin',
      email: 'admin@elearning.com',
      password: await hashPassword('Passer2025'),
      role: Role.ADMIN,
      avatar: faker.image.avatar(),
      bio: faker.lorem.paragraph(),
    },
  });

  // Créer plusieurs utilisateurs (formateurs + apprenants)
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        nom: faker.person.lastName(),
        prenom: faker.person.firstName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: await hashPassword('Passer2025'),
        role: i < 2 ? Role.FORMATEUR : Role.APPRENANT,
      },
    });
  }

  // Créer des formations + tutoriels + cours
  for (let i = 0; i < 8; i++) {
    const formation = await prisma.formation.create({
      data: {
        nomFormation: `Formation ${faker.commerce.department()}`,
        description: faker.lorem.paragraph(),
        photo: faker.image.url(),
      },
    });

    const tutorial = await prisma.tutorial.create({
      data: {
        titreTuto: `Tutoriel ${faker.hacker.verb()}`,
        descriptionTuto: faker.lorem.sentence(),
        photo: faker.image.url(),
        formationId: formation.id,
      },
    });

    // Ajouter 2 à 3 cours par tutoriel
    await prisma.cours.createMany({
      data: Array.from({ length: 5 }).map(() => ({
        titreCours: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        photo: faker.image.avatar(),
        tutorialId: tutorial.id,
      })),
    });
  }
  // Créer des certificats pour les apprenants
  // const apprenants = await prisma.user.findMany({
  //   where: { role: Role.APPRENANT },
  // });
  // const tutorials = await prisma.tutorial.findMany();
  // for (const apprenant of apprenants) {
  //   const randomTutorial = tutorials[Math.floor(Math.random() * tutorials.length)];
  //   await prisma.certificat.create({
  //     data: {
  //       titre: `Certificat de ${apprenant.prenom} ${apprenant.nom} pour le tutoriel ${randomTutorial.titreTuto}`,
  //       dateObtention: faker.date.past(),
  //       apprenantId: apprenant.id,
  //       tutorialId: randomTutorial.id,
  //     },
  //   });
  // }


  

  console.log('✅ Seed terminé avec succès.');
}

seed()
  .catch((e) => {
    console.error('❌ Erreur pendant le seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
