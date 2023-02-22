import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Switch, useLocation } from 'wouter'

const PublicRoute = ({ children }) => {
  const isAuthenticated = true

  // eslint-disable-next-line no-unused-vars
  const [_, redirection] = useLocation()

  if (!isAuthenticated) {
    return (
      <Switch>
        {children}
      </Switch>
    )
  }

  useEffect(() => redirection('/dashboard'), [])

  return null
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PublicRoute
