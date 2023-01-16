import ErrorMessageStyle from './indexStyled'
import PropTypes from 'prop-types'

const ErrorMessage = ({ children }) => (
  <ErrorMessageStyle>
    {children}
  </ErrorMessageStyle>
)

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired
}

export default ErrorMessage
