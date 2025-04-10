import { RequestHandler } from 'express';

export const isAuthenticated: RequestHandler = (req, res, next) => {
  if (!req.session.user) {
    res.status(401).json({ message: 'Non autorisé' });
    return;
  }
  next();
};

export const hasRole = (role: string): RequestHandler => {
  return (req, res, next) => {
    if (!req.session.user || req.session.user.role !== role) {
      res.status(403).json({ message: 'Accès interdit' });
      return;
    }
    next();
  };
};
