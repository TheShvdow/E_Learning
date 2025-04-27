import { Prisma } from '../../../prisma/generated/postgres';
import { IUser } from '../../types/user.interface';

export interface IUserRepository {
  create(data: Prisma.UserCreateInput): Promise<any>;
  findByEmail(email: string): Promise<any | null>;
  findByUsername(username: string): Promise<any | null>;
  findById(id: string): Promise<any | null>;
  findAll(): Promise<any[]>;
  update(id: string, data: Prisma.UserUpdateInput): Promise<any>;
  delete(id: string): Promise<void>;
  updatePassword(id: string, hashedPassword: string): Promise<void>;
  findByIdWithRelations(id: string): Promise<any | null>;
  findPaginated: (
    page: number,
    limit: number,
    search?: string
  ) => Promise<{ users: IUser[]; total: number }>;
  findDemandesFormateur(): Promise<IUser[]>;
  validerFormateur(id: string): Promise<any>;
refuserFormateur(id: string): Promise<any>;
findDemandesFormateurPaginated(page: number, limit: number, search?: string): Promise<{ users: IUser[]; total: number }>;


}
