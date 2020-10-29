export interface UserState {
  address: string;
  avatar: string;
  city: string;
  cpf: string;
  email: string;
  firstAccess: boolean;
  isAdmin: boolean;
  id: number;
  isDeleted: boolean;
  login: string;
  loginAttempts: number;
  managerId: number | null;
  name: string;
  number: number;
  password: string;
  passwordHash: string;
  phoneAreaCode: string;
  phoneNumber: string;
  profileIds: number[];
  state: string;
  zipcode: string;
}
export interface AuthState {
  token: string;
  profile: number;
  user: UserState;
}

export interface SignInCredentials {
  login: string;
  password: string;
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
