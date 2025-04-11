export interface IBaseUser {
  id?: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  username: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface IPostgresUser extends IBaseUser {
  id: string;
  role: 'ADMIN' | 'FORMATEUR' | 'APPRENANT';
}