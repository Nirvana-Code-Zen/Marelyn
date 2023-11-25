import { createContext, useEffect, useState } from 'react'

import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

import { onAuthStateChanged } from '~modules/auth/infraestructure/AuthProviderFactory'

export const UserContext = createContext({ isLogged: false })

export const UserProvider = ({ children }: ChildrenPropType) => {
  const [user, setUser] = useState({ isLogged: false })

  useEffect(() => {
    onAuthStateChanged(checkIfUserIsLogged)
  }, [])

  const checkIfUserIsLogged = (user: unknown) => {
    setUser({ isLogged: !!user })
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
