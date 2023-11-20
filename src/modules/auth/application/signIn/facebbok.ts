import { User } from "~modules/auth/domain/User"
import { AuthRepository } from "~modules/auth/domain/repository"

export function AuthFacebook(repository: AuthRepository) {

  const signIn = async() => {
    const response = await repository.signIn()

    if (response?.errorCode) {
      throw response
    }

    const user = User({ ...response.user })
    const accessToken = response.accessToken

    await repository.saveUser(user)
    return { user, accessToken}

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
