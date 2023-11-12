import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation } from 'wouter'

import Layeout from '../Components/Layeout'

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = true

  // eslint-disable-next-line no-unused-vars
  const [_, redirection] = useLocation()

  useEffect(() => redirection('/login'), [])

  if (isAuthenticated) {
    return (
      <Layeout>
        {children}
      </Layeout>
    )
  }

  return null
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}