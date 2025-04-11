import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user: {
      id: string;
      email: string;
      role: string;
      nom: string;
      prenom: string;
      username: string;
      avatar?: string;
      bio?: string;
      
      // Ajoutez d'autres propriétés de l'utilisateur si nécessaire
    };
  }
}