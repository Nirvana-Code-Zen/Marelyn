import { Auth, createUserWithEmailAndPassword } from 'firebase/auth'

import { Strategy } from './Strategy'

export function Email (email: string, password: string): Strategy {

  const execute = async (auth: Auth) => {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)

    return {
      user: credentials.user
    }
  }

  return {
    execute
  }
}
