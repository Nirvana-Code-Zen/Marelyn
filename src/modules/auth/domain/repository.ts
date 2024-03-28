import { type User } from './User'

export type Opts = {
  verificationId: string;
  setVerificationCode: (verificationId: string, verificationCode: string) => unknown;
}

export type options = {
  cb: (options: Opts) => Promise<unknown>,
  data: string
}

export interface AuthRepository {
    signIn(authMethod: AuthProviders): Promise<userAuthenticated | userNotAuthenticated>
    signInWithData(authMethod: AuthProviders, opts: options): Promise<userAuthenticated | userNotAuthenticated>
    saveUser(user: User): Promise<void>
    searchUser(uid: string): Promise<User | null>
}

export interface SignOutRepository {
  signOut(): void;
}

export type userAuthenticated = {
  accessToken: string
  user: unknown
}

export type userNotAuthenticated = {
  errorCode: string
  errorMessage: string
  email: string
  credential: unknown
}

export enum AuthProviders {
    Facebook = 'facebook.com',
    Google = 'google.com',
    Email = 'emailLink',
    Phone = 'phone'
}

export enum accountType {
  client = 'client',
  admin = 'admin'
}

export type AuthMethodProvider = AuthProviders

