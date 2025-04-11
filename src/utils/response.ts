

export const success = (res : any, data = null, message = 'Opération réussie') => {
    return res.status(200).json({ success: true, message, data });
  };
  
  export const error = (res : any, status = 500, message = 'Erreur serveur', details = null) => {
    return res.status(status).json({ success: false, message, details });
  };
  