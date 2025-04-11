import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors/HttpError';

export const errorHandler = (
  err: Error | HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err instanceof HttpError ? err.statusCode : 500;
  const message = err.message || 'Erreur interne du serveur';

  console.error('🔥 Erreur capturée :', err);

  res.status(status).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
