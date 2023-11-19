import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Switch, useLocation } from 'wouter'

import { UserContext } from '~UI/Context/User'
import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

export const PublicRoute = ({ children }: ChildrenPropType) => {
  const { isLogged } = useContext(UserContext)
  const [_, redirection] = useLocation()

  if (!isLogged) {
    return (
      <Switch>
        {children}
      </Switch>
    )
  }

  redirection('/dashboard')
  
  return null
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired
}

