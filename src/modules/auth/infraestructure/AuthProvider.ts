import { getAuth, FacebookAuthProvider, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'

import { AuthMethodProvider } from '~modules/auth/domain/repository'

type Provider = typeof FacebookAuthProvider | typeof GoogleAuthProvider | typeof EmailAuthProvider

type providerFactory = Record<AuthMethodProvider, Provider>

export function AuthProviderFactory(provideType: AuthMethodProvider): Provider {
  const provider: providerFactory = {
    [FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD]: FacebookAuthProvider,
    [GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD]: GoogleAuthProvider,
    [EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD]: EmailAuthProvider,
  }

  return provider[provideType]
}

export const onAuthStateChanged = (cb: (user: unknown) => void ) =>
  getAuth().onAuthStateChanged((user: unknown) => {
    cb(user)
  })


export const auth = getAuth
