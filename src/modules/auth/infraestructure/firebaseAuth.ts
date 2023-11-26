import { FirebaseError } from 'firebase/app'
import { 
  PhoneAuthProvider, 
  signInWithPopup, 
  FacebookAuthProvider, 
  GoogleAuthProvider,
  EmailAuthProvider, 
  RecaptchaVerifier, 
  Auth 
} from 'firebase/auth'

import { AuthProviderFactory, SocialMediaAuthProvider } from './AuthProviderFactory'

import { AuthMethodProvider, userAuthenticated, userNotAuthenticated } from '~modules/auth/domain/repository'

export const signIn = async (provider: AuthMethodProvider, auth: Auth): Promise<userAuthenticated | userNotAuthenticated> => {
  const { authProvider, authInstance } = AuthProviderFactory(provider, auth)

  if (isEmailAuthProviderInstance(authInstance)) {
    return await signInWithEmail(authInstance, authProvider)
  }

  if (isPhoneAuthProviderInstance(authProvider)) {
    return await signInWithPhone(authProvider, auth)
  }

  if (isSocialMediaAuthProviderInstance(authInstance) && isSocialMediaAuthProvider(authProvider)) {
    return await signInWithSocialMedia(authInstance, authProvider, auth)
  }

  throw new Error('Any provider match')
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
function signInWithEmail(_authInstance: EmailAuthProvider, _authProvider: SocialMediaAuthProvider | typeof EmailAuthProvider | typeof PhoneAuthProvider): Promise<userAuthenticated | userNotAuthenticated> {}

async function signInWithPhone(authProvider: PhoneAuthProvider, auth: Auth): Promise<userAuthenticated | userNotAuthenticated> {
  try {
    new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (_: unknown) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    })

    console.error(authProvider, '=======> authProvider')

    throw new Error('Not implemented yet')
  //console.log(recaptchaVerifier, '=======> recaptchaVerifier')
  //const confirmationResult = await authProvider.verifyPhoneNumber('+553319874195', recaptchaVerifier)
  }catch(err: unknown) {
    console.error(err, 'Error message in sighin phone')
    const error = err as FirebaseError
    const errorCode = error.code
    const errorMessage = error.message
    const email = error.customData?.email as string
    const credential = null //authProvider.credentialFromError(error)

    return { errorCode, errorMessage, email, credential }
  }
}


async function signInWithSocialMedia(authInstance: FacebookAuthProvider | GoogleAuthProvider, authProvider: SocialMediaAuthProvider, auth: Auth): Promise<userAuthenticated | userNotAuthenticated> {
  try {
    const result = await signInWithPopup(auth, authInstance)
    const user = result.user
    const credentials = authProvider.credentialFromResult(result)
    const accessToken = credentials?.accessToken || ''
    return { accessToken, user }
  }catch(err: unknown) {
    const error = err as FirebaseError
    const errorCode = error.code
    const errorMessage = error.message
    const email = error.customData?.email as string
    const credential = authProvider.credentialFromError(error)

    return { errorCode, errorMessage, email, credential }
  }
}

function isEmailAuthProviderInstance(authinstance: unknown): authinstance is EmailAuthProvider {
  return authinstance instanceof EmailAuthProvider
}

function isPhoneAuthProviderInstance(authinstance: unknown): authinstance is PhoneAuthProvider {
  return authinstance instanceof PhoneAuthProvider
}

function isSocialMediaAuthProviderInstance(authinstance: unknown): authinstance is FacebookAuthProvider | GoogleAuthProvider {
  return authinstance instanceof FacebookAuthProvider || authinstance instanceof GoogleAuthProvider
}

function isSocialMediaAuthProvider(authProvider: unknown): authProvider is SocialMediaAuthProvider {
  return authProvider === FacebookAuthProvider || authProvider === GoogleAuthProvider
}