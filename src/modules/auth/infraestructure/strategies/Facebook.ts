import { FirebaseError } from 'firebase/app'
import { Auth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

import { Strategy } from './Strategy'

export function Facebook (): Strategy {
  const provider = new FacebookAuthProvider()

  const execute = async (auth: Auth) => {
    provider.setCustomParameters({
      display: 'popup'
    })

    try {
      const result = await signInWithPopup(auth, provider)

      const credential = FacebookAuthProvider.credentialFromResult(result)
      const accessToken = credential?.accessToken || ''
      return { accessToken, user: result.user }
    } catch (err: unknown) {
      const error = err as FirebaseError
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData?.email as string

      const credential = FacebookAuthProvider.credentialFromError(error)

      throw new Error(`Error: ${errorCode} - ${errorMessage} - ${email} - ${credential}`)
    }
  }

  return {
    execute
  }

}
