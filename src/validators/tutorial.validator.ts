// 📁 src/validators/tutorial.validator.ts
import { z } from 'zod';

export const tutorialSchema = z.object({
  titreTuto: z.string(),
  descriptionTuto: z.string(),
  photo: z.string().url(),
  formationId: z.number()
});