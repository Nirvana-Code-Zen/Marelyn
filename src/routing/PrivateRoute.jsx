import PropTypes from 'prop-types'
import { useContext } from 'react'
import { useLocation } from 'wouter'

import { UserContext } from '../Context/User'
import { protectedRoutes } from './paths'

const ProtectedRoute = ({ children }) => {
  const [location, navigate] = useLocation()
  const user = useContext(UserContext)

  const isProtected = protectedRoutes.some(route => location.includes(route))
  if (!user.isLogged && isProtected) return navigate('/login')

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedRoute
