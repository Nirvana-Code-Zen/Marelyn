import { User } from '~modules/auth/domain/User'
import { AuthProviders, AuthRepository, accountType } from '~modules/auth/domain/repository'

export function AuthFacebook(repository: AuthRepository) {

  const signIn = async() => {
    const response = await repository.signIn()

    if ('errorCode' in response) {
      throw response
    }

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
      authMethod: AuthProviders.Facebook
    })

    const userAlreadyExist = await repository.searchUser(user.uid)

    if (userAlreadyExist) {
      return { user, accessToken }
    }

    await repository.saveUser(user)
    return { user, accessToken }
  }

  const signUp = () => {
    repository.signIn()
  }

  return {
    signIn,
    signUp
  }
}
