import { cloudinary } from '../../src/config/cloudinary';
import path from 'path';

export async function uploadImageToCloudinary(imagePath: string, folder: string): Promise<string> {
  try {
    // Construire le chemin complet vers l'image
    const fullPath = path.join(process.cwd(), 'public', imagePath);
    
    // Upload vers Cloudinary
    const result = await cloudinary.uploader.upload(fullPath, {
      folder: folder,
    });
    
    return result.secure_url;
  } catch (error) {
    console.error('Erreur upload Cloudinary:', error);
    throw error;
  }
}