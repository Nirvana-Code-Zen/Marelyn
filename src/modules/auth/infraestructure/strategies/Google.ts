import { FirebaseError } from 'firebase/app'
import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { Strategy } from './Strategy'

export function Google (): Strategy {
  const provider = new GoogleAuthProvider()

  const execute = async (auth: Auth) => {
    provider.setCustomParameters({
      display: 'popup'
    })

    try {
      const result = await signInWithPopup(auth, provider)

      const credential = GoogleAuthProvider.credentialFromResult(result)
      const accessToken = credential?.accessToken || ''
      return { accessToken, user: result.user }
    } catch (err: unknown) {
      const error = err as FirebaseError
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData?.email as string

      const credential = GoogleAuthProvider.credentialFromError(error)

      return { errorCode, errorMessage, email, credential }
    }
  }

  return {
    execute
  }

}
