// 📁 src/validators/formation.validator.ts
import { z } from 'zod';

export const formationSchema = z.object({
  nomFormation: z.string().min(3),
  description: z.string(),
  photo: z.string().url().optional(),
});