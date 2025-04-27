import { tutorialRepository } from '../repositories/tutorial.repository';

export const tutorialService = {
  getAll: () => tutorialRepository.getAll(),
  getById: (id: number, userId: string) => tutorialRepository.getById(id, userId),
  getByFormationId: (formationId: number) => tutorialRepository.getByFormationId(formationId), // ✅ ajout ici
  getByUserId: async (userId: string) => {
    return tutorialRepository.getByUserId(userId);
  },

  create: (data: any) => tutorialRepository.create(data),
  update: (id: number, data: any) => tutorialRepository.update(id, data),
  delete: (id: number) => tutorialRepository.delete(id),
  findById: (id: number) => tutorialRepository.findById(id),
};
