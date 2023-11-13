import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Switch, useLocation } from 'wouter'

export const PublicRoute = ({ children }) => {
  const isAuthenticated = true
  // eslint-disable-next-line no-unused-vars
  const [_, redirection] = useLocation()
  
  useEffect(() => redirection('/dashboard'), [])

  if (!isAuthenticated) {
    return (
      <Switch>
        {children}
      </Switch>
    )
  }


  return null
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired
}

