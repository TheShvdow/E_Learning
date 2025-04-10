// 📁 src/validators/certificat.validator.ts
import { z } from 'zod';

export const certificatSchema = z.object({
    titre: z.string(),
    apprenantId: z.number(),
    tutorialId: z.number()
  });