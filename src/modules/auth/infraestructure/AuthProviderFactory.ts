import { getAuth, FacebookAuthProvider } from 'firebase/auth'

import { providerType } from '~modules/auth/domain/repository'

type Provider = typeof FacebookAuthProvider

type providerFactory = Record<providerType, Provider>

export function AuthProviderFactory(provideType: providerType): Provider {
  const provider: providerFactory = {
    [FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD]: FacebookAuthProvider
  }

  return provider[provideType]
}

export const auth = getAuth
