import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import {cloudinary} from './cloudinary';

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let folder = 'cours';

    const resource_type = file.mimetype.startsWith('video')
      ? 'video'
      : file.mimetype === 'application/pdf'
      ? 'raw'
      : 'image';

    return {
      folder,
      resource_type,
      allowed_formats: ['mp4', 'mov', 'avi', 'pdf'],
      public_id: `${Date.now()}-${file.originalname}`,
    };
  },
});

const upload = multer({ storage });

export default upload;
