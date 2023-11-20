import { User } from "~modules/auth/domain/User"
import { AuthProviders, AuthRepository, accountType } from "~modules/auth/domain/repository"

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
    }

    const user = User({ 
      userName: userAuth.displayName,
      name: userAuth.displayName,
      email: userAuth.email,
      profilePhoto: userAuth.photoURL,
      accountType: accountType.client,
      authMethod: AuthProviders.Facebook
    })

    const accessToken = response.accessToken

    await repository.saveUser(user)
    return { user, accessToken }
  }

  const signOut = () => {
    repository.signOut()
  }

  const signUp = () => {
    repository.signIn()
  }

  return {
    signIn,
    signOut,
    signUp
  }
}
