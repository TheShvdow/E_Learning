import { coursRepository } from '../repositories/cours.repository';

export const coursService = {
  getAll: () => coursRepository.getAll(),
  getById: (id: number) => coursRepository.getById(id),

  create: async (data: any) => {
    return coursRepository.create(data);
  },

  update: async (id: number, data: any) => {
    return coursRepository.update(id, data);
  },

  delete: (id: number) => coursRepository.delete(id),
};
