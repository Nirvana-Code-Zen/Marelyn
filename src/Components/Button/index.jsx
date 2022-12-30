import PropTypes from 'prop-types'
import ButtonStyled from './ButtonStyled'

const Button = ({ onClick, children }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button
