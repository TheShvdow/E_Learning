import { formationRepository } from '../repositories/formation.repository';

export const formationService = {
  getAll: () => formationRepository.getAll(),
  getById: (id: number) => formationRepository.getById(id),
  create: (data: any) => formationRepository.create(data),
  update: (id: number, data: any) => formationRepository.update(id, data),
  delete: (id: number) => formationRepository.delete(id),
  findByName: (nomFFormation: string) => formationRepository.findByName(nomFFormation),
};
