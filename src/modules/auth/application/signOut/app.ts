import { SignOutRepository } from '~modules/auth/domain/repository'

export function SignOut(repository: SignOutRepository) {

  return {
    signOut: () => repository.signOut()
  }
}

