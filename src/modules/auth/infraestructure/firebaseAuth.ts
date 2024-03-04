import { AuthProviderFactory, auth } from './AuthProviderFactory'
import { AuthResponse } from './strategies/Strategy'

import { AuthMethodProvider  } from '~modules/auth/domain/repository'

export const signIn = async (provider: AuthMethodProvider): Promise<AuthResponse>  => {
  const Provider = AuthProviderFactory(provider)
  const response = await Provider.execute(auth())

  return response
}


