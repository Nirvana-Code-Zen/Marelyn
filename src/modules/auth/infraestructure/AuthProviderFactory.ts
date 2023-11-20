import { getAuth, FacebookAuthProvider } from 'firebase/auth'

import { AuthProviders, providerType } from '~modules/auth/domain/repository'

type Provider = typeof FacebookAuthProvider

type providerFactory = Record<providerType, Provider>

export function AuthProviderFactory(provideType: providerType): Provider {
  const provider: providerFactory = {
    [AuthProviders.Facebook]: FacebookAuthProvider
  }

  return provider[provideType]
}

export const auth = getAuth()
