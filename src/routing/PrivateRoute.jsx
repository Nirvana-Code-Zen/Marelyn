import PropTypes from 'prop-types'

import { useEffect } from 'react'
import { useLocation } from 'wouter'
import Layeout from '../Components/Layeout'

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true

  // eslint-disable-next-line no-unused-vars
  const [_, redirection] = useLocation()

  if (isAuthenticated) {
    return (
      <Layeout>
          {children}
      </Layeout>
    )
  }
  useEffect(() => redirection('/login'), [])

  return null
}

PrivateRoute.propTypes = {

  children: PropTypes.node.isRequired
}

export default ProtectedRoute
