import { createContext, useEffect, useState } from 'react'

import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

import { SignOut } from '~modules/auth/application/signOut/app'
import { SignOutRepository } from '~modules/auth/domain/repository'
import { onAuthStateChanged } from '~modules/auth/infraestructure/AuthProviderFactory'
import { AuthSignOut } from '~modules/auth/infraestructure/auth'

export const UserContext = createContext({ isLogged: false, logOut: () => {} })

export const UserProvider = ({ children }: ChildrenPropType) => {
  const repository: SignOutRepository = AuthSignOut()
  const { signOut } = SignOut(repository)

  const [user, setUser] = useState({ isLogged: false })

  useEffect(() => {
    onAuthStateChanged(checkIfUserIsLogged)
  }, [])

  const checkIfUserIsLogged = (user: unknown) => {
    setUser({ isLogged: !!user })
  }

  const logOut = () => signOut()

  return (
    <UserContext.Provider value={{ ...user, logOut }}>
      {children}
    </UserContext.Provider>
  )
}
