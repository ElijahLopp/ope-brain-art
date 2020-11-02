export interface UserState {
  avatar: string;
  cpf: string;
  email: string;
  id: number;
  name: string;
  profile: number;
}
export interface AuthState {
  token: string;
  profile: number;
  user: UserState;
}

export interface SignInCredentials {
  email: string;
  password: string;
  remember: boolean;
}

export interface AuthContextData {
  user: UserState;
  token: string;
  loading: boolean;
  profile: number;
  signIn: (credentials: SignInCredentials) => Promise<boolean>;
  onForgotPassword: (login: string) => Promise<boolean>;
  changePassword: (newPassword: string) => Promise<boolean>;
  redefinePassword: (newPassword: string, token: string) => Promise<boolean>;
  signOut: () => void;
}

export enum ProfilesEnum {
  user = 1,
  admin = 2,
}
