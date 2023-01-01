import ErrorMessageStyle from './indexStyled'
import PropTypes from 'prop-types'

const ErrorMessage = ({ children }) => (
  <ErrorMessageStyle>
    <p>Corrigue los siguientes errores:</p>
    {children}
  </ErrorMessageStyle>
)

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired
}

export default ErrorMessage
