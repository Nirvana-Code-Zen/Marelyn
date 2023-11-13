import React, { useContext } from 'react'
import { useLocation } from 'wouter'

import { UserContext } from '~UI/Context/User'
import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

import {Layeout} from '../Components/Layeout'

export const PrivateRoute = ({ children }: ChildrenPropType) => {
  const { isLogged } = useContext(UserContext)
  const [_, redirection] = useLocation()

  if (isLogged) {
    return (
      <Layeout>
        {children}
      </Layeout>
    )
  }

  redirection('/login')
  return null
}