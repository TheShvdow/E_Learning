import { Router, Request, Response, NextFunction } from 'express';
import { ProgressController } from '../../infrastructure/web/controllers/ProgressController';
import { isAuthenticated } from '../../middlewares/auth.middleware';

const router = Router();
// Type for AsyncHandler
type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;
// Wrap function to handle async errors
const wrap = (fn: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

// Routes for progress
router.post('/enroll', isAuthenticated, wrap(ProgressController.enroll));
router.post('/complete', isAuthenticated, wrap(ProgressController.complete));
router.get('/progress', isAuthenticated, wrap(ProgressController.getProgress));

export default router;
