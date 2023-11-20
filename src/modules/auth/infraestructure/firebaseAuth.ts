import { FirebaseError } from 'firebase/app'
import { signInWithPopup } from 'firebase/auth'

import { AuthProviderFactory, auth } from './AuthProviderFactory'

import { providerType, userAuthenticated, userNotAuthenticated } from '~modules/auth/domain/repository'

export const signIn = async (provider: providerType): Promise<userAuthenticated | userNotAuthenticated> => {
  const Provider = AuthProviderFactory(provider)
  const providerInstance = new Provider()

  try {

    const result = await signInWithPopup(auth(), providerInstance)
    const user = result.user

    const credentials = Provider.credentialFromResult(result)
    const accessToken = credentials?.accessToken
    return { accessToken, user }
  } catch(err: unknown) {
    const error = err as FirebaseError
    const errorCode = error.code
    const errorMessage = error.message
    const email = error.customData?.email as string
    const credential = Provider.credentialFromError(error)

    return { errorCode, errorMessage, email, credential }
  }
}
