// 📁 src/validators/cours.validator.ts
import { z } from 'zod';

export const coursSchema = z.object({
    titreCours: z.string(),
    content: z.string(),
    photo: z.string().url(),
    tutorialId: z.number()
  });