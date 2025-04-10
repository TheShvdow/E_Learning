import 'express-session';

declare module 'express-session' {
  interface Session {
    user?: {
      id: string;
      email: string;
      nom: string;
      prenom: string;
      // Ajoutez d'autres propriétés selon votre modèle User
    };
  }
}
