import PropTypes from 'prop-types'

import { ErrorMessageStyle } from './indexStyled'

export const ErrorMessage = ({ children }) => (
  <ErrorMessageStyle>
    {children}
  </ErrorMessageStyle>
)

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired
}