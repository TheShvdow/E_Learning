// 📁 src/middlewares/security.middleware.ts
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

export const securityMiddleware = [
  helmet(),
  cors({ origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }),
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Trop de requêtes, réessayez plus tard.',
  })
];