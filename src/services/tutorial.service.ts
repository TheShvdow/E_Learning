import { tutorialRepository } from '../repositories/tutorial.repository';

export const tutorialService = {
  getAll: () => tutorialRepository.getAll(),
  getById: (id: number) => tutorialRepository.getById(id),
  create: (data: any) => tutorialRepository.create(data),
  update: (id: number, data: any) => tutorialRepository.update(id, data),
  delete: (id: number) => tutorialRepository.delete(id),
};
