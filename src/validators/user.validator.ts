// 📁 src/validators/user.validator.ts
import { z } from 'zod';

export const userSchema = z.object({
  nom: z.string().min(2),
  prenom: z.string().min(2),
  username: z.string().min(3).toLowerCase(),
  email: z.string().email().toLowerCase(),
  password: z.string().min(8),
  role: z.enum(['ADMIN', 'APPRENANT', 'FORMATEUR']).default('APPRENANT'),
  avatar: z.string().optional(),
});
export const userUpdateSchema = z.object({
  id: z.string().uuid(),
  nom: z.string().optional(),
  prenom: z.string().optional(),
  username: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
  role: z.enum(['ADMIN', 'APPRENANT', 'FORMATEUR']).optional(),
  photo: z.string().optional(),
});

// This schema is used for login, so we don't need the role
// and we can use either email or username to login
export const userLoginSchema = z.object({
  email: z.string().email().toLowerCase().optional(),
  password: z.string().min(8),
  username: z.string().min(3).optional(),
});
