import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = false

  if (isAuthenticated) {
    return (
      <Component />
    )
  }

  return (
    <Component />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired
}

export default PrivateRoute
