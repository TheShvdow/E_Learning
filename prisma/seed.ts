import { PrismaClient, Role, User, Tutorial, Cours } from '../prisma/generated/postgres';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { uploadImageToCloudinary } from './utils/uploadImage';

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}
// Images pour les formations, tutoriels et cours with cloudinary


const formationImages = [
  '/images/formations/nodejs.png',
  '/images/formations/react.png',
  '/images/formations/docker.png',
  '/images/formations/angular.png',
  '/images/formations/figma.png',
  '/images/formations/kubernetes.webp',
  '/images/formations/nestjs.jpg',
  '/images/formations/postgress.png',
  '/images/formations/windows.png',
  '/images/formations/kali.png',
  '/images/formations/flutter.png',
];

const tutorielImages = [
  '/images/tutoriels/tuto-nodejs.png',
  '/images/tutoriels/tuto-react.png',
  '/images/tutoriels/tuto-docker.png',
  '/images/tutoriels/tuto-angular.png',
  '/images/tutoriels/tuto-figma.png',
  '/images/tutoriels/tuto-kubernetes.webp',
  '/images/tutoriels/tuto-nestjs.jpg',
  '/images/tutoriels/tuto-postgress.png',
  '/images/tutoriels/tuto-windows.png',
  '/images/tutoriels/tuto-kali.png',
  '/images/tutoriels/tuto-flutter.png',
];

const coursImages = [
  '/images/cours/cours1.jpg',
  '/images/cours/cours2.jpg',
  '/images/cours/cours3.jpg',
];

const videosCours = [
  'https://www.youtube.com/watch?v=QLPRsWCQ5BE',
]

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomvideo = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];



async function seed() {
  console.log('🌱 Démarrage du seed...');

  // Nettoyage
  await prisma.certificat.deleteMany();
  await prisma.coursProgress.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.cours.deleteMany();
  await prisma.tutorial.deleteMany();
  await prisma.formation.deleteMany();
  await prisma.user.deleteMany();

  // 👤 Admin
  await prisma.user.create({
    data: {
      nom: 'Admin',
      prenom: 'Super',
      username: 'admin',
      email: 'admin@elearning.com',
      password: await hashPassword('Passer2025'),
      role: Role.ADMIN,
      avatar: 'https://i.pravatar.cc/150?img=1',
      bio: 'Administrateur principal de la plateforme e-learning Jangu_Bi.',
    },
  });

  // 👥 Création des utilisateurs
  const users: User[] = [];
  for (let i = 0; i < 12; i++) {
    const isFormateur = i < 3;
    const user = await prisma.user.create({
      data: {
        nom: faker.person.lastName(),
        prenom: faker.person.firstName(),
        username: faker.internet.userName(),
        email: faker.internet.email().toLowerCase(),
        password: await hashPassword('Passer2025'),
        role: isFormateur ? Role.FORMATEUR : Role.APPRENANT,
        avatar: `https://i.pravatar.cc/150?img=${i + 2}`,
        bio: isFormateur ? faker.lorem.sentence() : '',
        demandeRoleFormateur: false,
      },
    });
    users.push(user);
  }

  const formationsList = [
    { name: 'Node.js', desc: 'Maîtrisez le développement backend avec Node.js' },
    { name: 'React', desc: 'Créez des interfaces modernes avec React.js' },
    { name: 'Docker', desc: 'Conteneurisation avec Docker et Docker Compose' },
    { name: 'NestJS', desc: 'Structure solide pour backend en TypeScript' },
    { name: 'Kubernetes', desc: 'Déploiement avancé de microservices' },
    { name: 'Linux', desc: 'Commandes et administration système' },
  ];

  const tutorials: { tutorial: Tutorial; coursList: Cours[] }[] = [];

  for (const formationItem of formationsList) {
    // Upload l'image de formation vers Cloudinary
    const randomFormationImage = getRandom(formationImages);
    const formationImageUrl = await uploadImageToCloudinary(
      randomFormationImage,
      'formations'
    );

    const formation = await prisma.formation.create({
      data: {
        nomFormation: `Formation ${formationItem.name}`,
        description: formationItem.desc,
        photo: formationImageUrl
      },
    });

    // Upload l'image du tutoriel
    const randomTutorialImage = getRandom(tutorielImages);
    const tutorialImageUrl = await uploadImageToCloudinary(
      randomTutorialImage,
      'tutoriels'
    );

    const tutorial = await prisma.tutorial.create({
      data: {
        titreTuto: `Tutoriel ${formationItem.name}`,
        descriptionTuto: faker.lorem.sentences(2),
        photo: tutorialImageUrl,
        formationId: formation.id,
      },
    });

    const coursList: Cours[] = [];

    for (let j = 0; j < 4; j++) {
      // Upload l'image du cours
      // const randomCoursImage = getRandom(coursImages);
      // const coursImageUrl = await uploadImageToCloudinary(
      //   randomCoursImage,
      //   'cours'
      // );

      const cours = await prisma.cours.create({
        data: {
          titreCours: `${formationItem.name} - Cours ${j + 1}`,
          content: faker.lorem.paragraphs(2),
          // photo: coursImageUrl,
          videosUrl: getRandomvideo(videosCours),
          tutorialId: tutorial.id,
        },
      });
      coursList.push(cours);
    }

    tutorials.push({ tutorial, coursList });
  }

  
  // Apprenants avec progression et certificats
  const apprenants = users.filter((u) => u.role === Role.APPRENANT);
  for (const apprenant of apprenants) {
    const randomTutorial = tutorials[Math.floor(Math.random() * tutorials.length)];
    const { tutorial, coursList } = randomTutorial;

    await prisma.enrollment.create({
      data: { userId: apprenant.id, tutorialId: tutorial.id },
    });

    const isComplete = Math.random() > 0.5;

    for (const cours of coursList.slice(0, isComplete ? coursList.length : 2)) {
      await prisma.coursProgress.create({
        data: {
          userId: apprenant.id,
          coursId: cours.id,
          completed: true,
        },
      });
    }

    if (isComplete) {
      await prisma.certificat.create({
        data: {
          titre: `Certificat de ${apprenant.prenom} ${apprenant.nom} - ${tutorial.titreTuto}`,
          dateObtention: new Date(),
          apprenantId: apprenant.id,
          tutorialId: tutorial.id,
        },
      });
    }
  }

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
