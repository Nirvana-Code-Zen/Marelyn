import PropTypes from 'prop-types'
import ButtonStyled from './ButtonStyled'

const Button = ({ onClick, children, width }) => {
  return (
    <ButtonStyled type='button' onClick={onClick} $width_sizing={width} data-testid="button">
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string

}

export default Button
