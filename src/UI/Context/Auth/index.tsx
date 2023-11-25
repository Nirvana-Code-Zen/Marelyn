import { Firestore } from 'firebase/firestore'
import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'wouter'

import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

import { FirebaseContext } from '../Firebase'

import { AuthFacebook } from '~modules/auth/application/signIn/facebbok'
import { AuthProviders, AuthRepository } from '~modules/auth/domain/repository'
import { onAuthStateChanged } from '~modules/auth/infraestructure/AuthProviderFactory'
import { Auth } from '~modules/auth/infraestructure/auth'

export interface AuthContextState {
  signInWithFacebook: () => Promise<void>
  logOut: () => void
}

export const AuthContext = createContext({} as AuthContextState)

export const AuthProvider = ({ children }: ChildrenPropType) => {
  const [_, setLocation] = useLocation()
  const { db } = useContext(FirebaseContext)
  const repository: AuthRepository = Auth(AuthProviders.Facebook, db as Firestore)

  const { signIn, signOut } = AuthFacebook(repository)

  const sendToLoginIfNotAuthenticated = (user: unknown) => {
    console.log(user)
    if (!user) return setLocation('/login')

    setLocation('/home')
  }

  useEffect(() => {
    onAuthStateChanged(sendToLoginIfNotAuthenticated)
  }, [])

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
