import { createContext, useContext } from "react"

import { ChildrenPropType } from "~UI/shared/types/childrenPropType"

import { FirebaseContext } from "../Firebase"

import { AuthFacebook } from "~modules/auth/application/signIn/facebbok"
import { AuthProviders, AuthRepository } from "~modules/auth/domain/repository"
import { Auth } from "~modules/auth/infraestructure/auth"

export interface AuthContextState {
  signInWithFacebook: () => Promise<void>
  logOut: () => void
}

export const AuthContext = createContext({} as AuthContextState)

export const AuthProvider = ({ children }: ChildrenPropType) => {
  const { db } = useContext(FirebaseContext)
  const repository: AuthRepository = Auth(AuthProviders.Facebook, db)

  const { signIn, signOut } = AuthFacebook(repository)

  async function signInWithFacebook() {
    await signIn()
  }

  function logOut() {
    signOut()
  }

  return (
    <AuthContext.Provider value={{ signInWithFacebook, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
