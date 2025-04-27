// src/routes/statistique.routes.ts
import { Router, RequestHandler, Request, Response, NextFunction } from "express";
import { getStats } from "../controllers/statistique.controller";

const router = Router();

const wrap = (fn: Function): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

router.get("/", wrap (getStats));

export default router;
