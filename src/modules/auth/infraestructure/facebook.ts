import { signIn as signInWithFirebase } from "./firebaseAuth"

import { AuthProviders, AuthRepository, userAuthenticated, userNotAuthenticated } from "~modules/auth/domain/repository"

export function AuthFacebook(): AuthRepository {
  return {
    signIn,
    signOut,
    saveUser
  }
}

const signIn = async (): Promise<userAuthenticated | userNotAuthenticated> => {
  return await signInWithFirebase(AuthProviders.Facebook)
}

const saveUser = async (): Promise<void> => {}

const signOut = () => {}
