import { getAuth, FacebookAuthProvider, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'

import { Facebook, Google, Email } from './strategies'
import { Strategy } from './strategies/Strategy'

import { AuthMethodProvider } from '~modules/auth/domain/repository'

export function AuthProviderFactory(provideType: AuthMethodProvider, opts: {email?:string, password?: string}): Strategy {
  const provider = {
    [FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD]: Facebook(),
    [GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD]: Google(),
    [EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD]: Email(opts.email || '', opts.password || ''),
  }

  return provider[provideType]
}


export const onAuthStateChanged = (cb: (user: unknown) => void ) =>
  getAuth().onAuthStateChanged((user: unknown) => {
    cb(user)
  })


export const auth = getAuth
