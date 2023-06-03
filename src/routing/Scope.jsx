import PropTypes from 'prop-types'
import { Router, useRouter, useLocation } from 'wouter'

const Scope = props => {
  const router = useRouter()
  const [parentLocation] = useLocation()

  const nestedBase = `${router.base}${props.base}`
  if (!parentLocation.startsWith(nestedBase)) return null

  return (
    <Router base={nestedBase} key={nestedBase}>
      {props.children}
    </Router>
  )
}

Scope.propTypes = {
  base: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Scope
