import prisma from '../../config/prisma';

export const ProgressRepository = {
  enrollToTutorial: async (userId: string, tutorialId: number) => {
    return prisma.enrollment.upsert({
      where: { userId_tutorialId: { userId, tutorialId } },
      update: {},
      create: { userId, tutorialId }
    });
  },

  markCourseAsCompleted: async (userId: string, coursId: number) => {
    return prisma.coursProgress.upsert({
      where: { userId_coursId: { userId, coursId } },
      update: { completed: true },
      create: { userId, coursId, completed: true }
    });
  },

  getTutorialProgress: async (userId: string, tutorialId: number) => {
    const total = await prisma.cours.count({ where: { tutorialId } });
    const completed = await prisma.coursProgress.count({
      where: { userId, cours: { tutorialId }, completed: true }
    });
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { total, completed, percent };
  },
  isEnrolled: async (userId: string, tutorialId: number) => {
    const enrollment = await prisma.enrollment.findUnique({
      where: { userId_tutorialId: { userId, tutorialId } }
    });
    return Boolean(enrollment);
  }
  
};
