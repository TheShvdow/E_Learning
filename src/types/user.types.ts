export interface IBaseUser {
  id?: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  username: string;
  role: string;
}

export interface IPostgresUser extends IBaseUser {
  id: string;
  role: 'ADMIN' | 'FORMATEUR' | 'APPRENANT';
}