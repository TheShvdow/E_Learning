import prisma from '../src/config/prisma';

async function seedProgress() {
  const user = await prisma.user.findFirst({ where: { role: 'APPRENANT' } });
  const tutorials = await prisma.tutorial.findMany({ include: { cours: true } });

  if (!user || tutorials.length === 0) {
    console.log('Aucun utilisateur ou tutoriel trouvé.');
    return;
  }

  for (const tutorial of tutorials) {
    await prisma.enrollment.create({
      data: { userId: user.id, tutorialId: tutorial.id }
    });

    for (const cours of tutorial.cours.slice(0, 2)) {
      await prisma.coursProgress.create({
        data: { userId: user.id, coursId: cours.id, completed: true }
      });
      
    }
  }
  // Créer un certificat pour l'apprenant si progression est terminée
  const totalCourses = await prisma.cours.count({ where: { tutorialId: tutorials[0].id } });
  const completedCourses = await prisma.coursProgress.count({
    where: { userId: user.id, cours: { tutorialId: tutorials[0].id }, completed: true }
  });
  const percent = totalCourses === 0 ? 0 : Math.round((completedCourses / totalCourses) * 100);
  if (percent < 100) {
    console.log('La progression n\'est pas terminée, certificat non créé.');
    return;
  }

  if (percent === 100) {
  const certificat = await prisma.certificat.create({
    data: {
      titre: `Certificat de ${user.prenom} ${user.nom} pour le tutoriel ${tutorials[0].titreTuto}`,
      dateObtention: new Date(),
      apprenantId: user.id,
      tutorialId: tutorials[0].id
    }
  });

  console.log(`Certificat créé pour ${user.prenom} ${user.nom}: ${certificat.titre}`);
}

  console.log('✅ Progression seedée avec succès');
}

seedProgress().finally(() => prisma.$disconnect());
