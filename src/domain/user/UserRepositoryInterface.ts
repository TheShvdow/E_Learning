import { Prisma } from '../../../prisma/generated/postgres';

export interface IUserRepository {
  create(data: Prisma.UserCreateInput): Promise<any>;
  findByEmail(email: string): Promise<any | null>;
  findByUsername(username: string): Promise<any | null>;
  findById(id: string): Promise<any | null>;
  findAll(): Promise<any[]>;
  update(id: string, data: Prisma.UserUpdateInput): Promise<any>;
  delete(id: string): Promise<void>;
  updatePassword(id: string, hashedPassword: string): Promise<void>;
}
