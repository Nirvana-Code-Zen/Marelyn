import { 
  FacebookAuthProvider, 
  GoogleAuthProvider, 
  EmailAuthProvider, 
  PhoneAuthProvider,
  Auth,
  getAuth
} from 'firebase/auth'


import { AuthMethodProvider } from '~modules/auth/domain/repository'

export type SocialMediaAuthProvider = typeof FacebookAuthProvider | typeof GoogleAuthProvider

export function AuthProviderFactory(provideType: AuthMethodProvider, auth: Auth)  {
  const provider = {
    [FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD]: SocialAuthProvider(FacebookAuthProvider),
    [GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD]: SocialAuthProvider(GoogleAuthProvider),
    [EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD]: EmailProvider(EmailAuthProvider),
    [PhoneAuthProvider.PHONE_SIGN_IN_METHOD]: PhoneProvider(PhoneAuthProvider, auth)
  }[provideType]

  if (!provider) {
    throw new Error('Provider not found')
  }

  return provider
}

export function SocialAuthProvider (Provider: SocialMediaAuthProvider)  {
  const providerInstance = new Provider()

  providerInstance.setCustomParameters({
    display: 'popup'
  })

  return {
    authProvider: Provider,
    authInstance: providerInstance
  }
}

export function EmailProvider(Provider: typeof EmailAuthProvider){
  return {
    authProvider: Provider,
    authInstance: new Provider()
  }
}

export function PhoneProvider(Provider: typeof PhoneAuthProvider, auth: Auth){
  return {
    authProvider: Provider,
    authInstance: new Provider(auth)
  }
}

export const onAuthStateChanged = (cb: (user: unknown) => void ) =>
  getAuth().onAuthStateChanged((user: unknown) => {
    cb(user)
  })
