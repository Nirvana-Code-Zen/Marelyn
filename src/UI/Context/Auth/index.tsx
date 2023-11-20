import React, { createContext, useContext, useRef } from "react"
import {ChildrenPropType} from "~UI/shared/types/childrenPropType"
import {AuthFacebook} from "~modules/auth/application/signIn/facebbok"

import { AuthProviders, AuthRepository } from "~modules/auth/domain/repository"
import {Auth} from "~modules/auth/infraestructure/auth"
import {FirebaseContext} from "../Firebase"

export interface AuthContextState {
  signInWithFacebook: () => void
  logOut: () => void
}

export const AuthContext = createContext({} as AuthContextState)

export const AuthProvider = ({ children }: ChildrenPropType) => {
  const { db } = useContext(FirebaseContext)
  const repository: AuthRepository = Auth(AuthProviders.Facebook, db)

  const { signIn, signOut } = AuthFacebook(repository)

  function signInWithFacebook() {
    signIn()
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
