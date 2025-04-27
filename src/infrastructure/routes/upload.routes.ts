import { Router, Request, Response } from 'express';
import upload from '../../config/multer';
import { isAuthenticated } from '../../middlewares/auth.middleware';

const router = Router();

router.post('/upload', upload.single('file'), (req: Request, res: Response): void => {
    const file = req.file;
  
    if (!file) {
      res.status(400).json({ message: 'Aucun fichier envoyé' });
      return;
    }
  
    res.status(200).json({
      url: file.path,
      public_id: file.filename,
      mimetype: file.mimetype,
    });
  });
  

export default router;
