import { User } from '~modules/auth/domain/User'
import { AuthMethodProvider, AuthProviders, AuthRepository, accountType, userAuthenticated } from '~modules/auth/domain/repository'
import { options } from '~modules/auth/domain/repository'

export function AuthSignIn(repository: AuthRepository) {

  const save  = async (response: userAuthenticated, signInMethod: AuthMethodProvider) => {

    const userAuth = response.user as {
      displayName: string
      email: string
      photoURL: string
      uid: string
    }
  
    const accessToken = response.accessToken
  
    const user = User({ 
      uid: userAuth.uid,
      userName: userAuth.displayName,
      name: userAuth.displayName,
      email: userAuth.email,
      profilePhoto: userAuth.photoURL,
      accountType: accountType.client,
      authMethod: signInMethod as AuthProviders
    })
  
    const userAlreadyExist = await repository.searchUser(user.uid)
  
    if (userAlreadyExist) {
      return { user, accessToken }
    }
  
    await repository.saveUser(user)
    return { user, accessToken }
  }

  const signIn = async(signInMethod: AuthMethodProvider) => {
    const response = await repository.signIn(signInMethod)

    if ('errorCode' in response) {
      throw response
    }

    return await save(response, signInMethod)
  }

  const signInWithPhoneOrEmail = async (signInMethod: AuthMethodProvider, opts: options) => {
    const response = await repository.signInWithData(signInMethod, opts)
    if ('errorCode' in response) {
      throw response
    }

    return await save(response, signInMethod)
  }

  return {
    signIn,
    signInWithPhoneOrEmail
  }
}

