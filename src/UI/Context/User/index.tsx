import { createContext, useState } from 'react'

import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

export const UserContext = createContext({ isLogged: false })

export const UserProvider = ({ children }: ChildrenPropType) => {
  const [user] = useState({ isLogged: false })

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
