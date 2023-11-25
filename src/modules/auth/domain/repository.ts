import { type User } from './User'

export interface AuthRepository {
    signIn(): Promise<userAuthenticated | userNotAuthenticated>
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
}

export enum accountType {
  client = 'client',
  admin = 'admin'
}

export type providerType = AuthProviders.Facebook
