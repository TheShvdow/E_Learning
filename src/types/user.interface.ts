// 📁 src/types/user.interface.ts
export interface IUser {
    nom: string;
    prenom: string;
    email: string;
    username: string;
    password: string;
    role : "APPRENANT" | "ADMIN" | "FORMATEUR";
    avatar?: string;
    bio?: string;
  }
 