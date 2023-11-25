import { Firestore } from 'firebase/firestore'
import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'wouter'

import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

import { FirebaseContext } from '../Firebase'

import { AuthFacebook } from '~modules/auth/application/signIn/facebbok'
import { SignOut } from '~modules/auth/application/signOut/app'
import { AuthProviders, AuthRepository, SignOutRepository } from '~modules/auth/domain/repository'
import { onAuthStateChanged } from '~modules/auth/infraestructure/AuthProviderFactory'
import { Auth, AuthSignOut } from '~modules/auth/infraestructure/auth'

export interface AuthContextState {
  signInWithFacebook: () => Promise<void>
  logOut: () => void
}

export const AuthContext = createContext({} as AuthContextState)

export const AuthProvider = ({ children }: ChildrenPropType) => {
  const [_, setLocation] = useLocation()
  const { db } = useContext(FirebaseContext)
  const repository: AuthRepository = Auth(AuthProviders.Facebook, db as Firestore)
  const signOutRepository: SignOutRepository = AuthSignOut()

  const { signIn } = AuthFacebook(repository)
  const { signOut } = SignOut(signOutRepository)

  const sendToLoginIfNotAuthenticated = (user: unknown) => {
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
