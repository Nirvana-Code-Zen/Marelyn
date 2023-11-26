import { Firestore } from 'firebase/firestore'
import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'wouter'

import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

import { FirebaseContext } from '../Firebase'

import { AuthSignIn } from '~modules/auth/application/signIn/signin'
import { AuthMethodProvider, AuthRepository } from '~modules/auth/domain/repository'
import { onAuthStateChanged } from '~modules/auth/infraestructure/AuthProviderFactory'
import { Auth } from '~modules/auth/infraestructure/auth'

export interface AuthContextState {
  signInWith: (signInMethod: AuthMethodProvider) => Promise<void>
  logOut: () => void
  signInWithData: (signinmethod: AuthMethodProvider, data: string) => void
}

export const AuthContext = createContext({} as AuthContextState)

export const AuthProvider = ({ children }: ChildrenPropType) => {
  const [_, setLocation] = useLocation()
  const { db } = useContext(FirebaseContext)
  const repository: AuthRepository = Auth(db as Firestore)

  const { signIn, signInWithPhoneOrEmail } = AuthSignIn(repository)

  const sendToLoginIfNotAuthenticated = (user: unknown) => {
    if (!user) return setLocation('/login')
    setLocation('/home')
  }

  useEffect(() => {
    onAuthStateChanged(sendToLoginIfNotAuthenticated)
  }, [])

  async function signInWith(signInMethod: AuthMethodProvider) {
    await signIn(signInMethod)
  }

  async function signInWithData(signInMethod: AuthMethodProvider, data: string) {
    await signInWithPhoneOrEmail(signInMethod, data)
  }

  function logOut() {
  }

  return (
    <AuthContext.Provider value={{ signInWith, logOut, signInWithData }}>
      {children}
    </AuthContext.Provider>
  )
}
