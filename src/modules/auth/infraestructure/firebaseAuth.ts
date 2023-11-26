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

type options = {
  cb: (options: unknown) => unknown,
  data: string
}

export const signIn = async (provider: AuthMethodProvider, auth: Auth, opts?: options ): Promise<userAuthenticated | userNotAuthenticated> => {
  const { authProvider, authInstance } = AuthProviderFactory(provider, auth)

  if (isEmailAuthProviderInstance(authInstance) && isEmailAuthProvider(authProvider)) {
    if (!opts) throw new Error('Callback function is required')

    return await signInWithEmail(authInstance, authProvider, opts)
  }

  if (isPhoneAuthProviderInstance(authInstance) && isPhoneAuthProvider(authProvider)) {
    if (!opts) throw new Error('Callback function is required')

    return await signInWithPhone(authInstance, authProvider, auth, opts)
  }

  if (isSocialMediaAuthProviderInstance(authInstance) && isSocialMediaAuthProvider(authProvider)) {
    return await signInWithSocialMedia(authInstance, authProvider, auth)
  }

  throw new Error('Any provider match')
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
function signInWithEmail(_authInstance: EmailAuthProvider, _authProvider:  typeof EmailAuthProvider, _opts: options): Promise<userAuthenticated | userNotAuthenticated> {
  throw new Error('Signin email not implemented yet')
}

async function signInWithPhone(authProvider: PhoneAuthProvider, Provider: typeof PhoneAuthProvider, auth: Auth, opts: options): Promise<userAuthenticated | userNotAuthenticated> {
  try {
    const verifyer = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
    })

    const verificationId = await authProvider.verifyPhoneNumber(opts.data, verifyer)
    const credential = await opts.cb({ verificationId, setVerificationCode: Provider.credential })

    console.error(credential, 'credential')

    throw new Error('Not implemented yet')
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

function isEmailAuthProvider(authProvider: unknown): authProvider is typeof EmailAuthProvider {
  return authProvider === EmailAuthProvider
}

function isPhoneAuthProviderInstance(authinstance: unknown): authinstance is PhoneAuthProvider {
  return authinstance instanceof PhoneAuthProvider
}

function isPhoneAuthProvider(authProvider: unknown): authProvider is typeof PhoneAuthProvider {
  return authProvider === PhoneAuthProvider
}

function isSocialMediaAuthProviderInstance(authinstance: unknown): authinstance is FacebookAuthProvider | GoogleAuthProvider {
  return authinstance instanceof FacebookAuthProvider || authinstance instanceof GoogleAuthProvider
}

function isSocialMediaAuthProvider(authProvider: unknown): authProvider is SocialMediaAuthProvider {
  return authProvider === FacebookAuthProvider || authProvider === GoogleAuthProvider
}