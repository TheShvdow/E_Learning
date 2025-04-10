import { coursRepository } from '../repositories/cours.repository';

export const coursService = {
  getAll: () => coursRepository.getAll(),
  getById: (id: number) => coursRepository.getById(id),
  create: (data: any) => coursRepository.create(data),
  update: (id: number, data: any) => coursRepository.update(id, data),
  delete: (id: number) => coursRepository.delete(id),
};
