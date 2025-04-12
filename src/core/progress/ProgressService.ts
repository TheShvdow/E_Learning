import { ProgressRepository } from '../../infrastructure/repositories/ProgressRepository';

export const ProgressService = {
  enroll: (userId: string, tutorialId: number) =>
    ProgressRepository.enrollToTutorial(userId, tutorialId),

  complete: (userId: string, coursId: number) =>
    ProgressRepository.markCourseAsCompleted(userId, coursId),

  getProgress: (userId: string, tutorialId: number) =>
    ProgressRepository.getTutorialProgress(userId, tutorialId),

  isEnrolled: (userId: string, tutorialId: number) =>
    ProgressRepository.isEnrolled(userId, tutorialId),
  
};


