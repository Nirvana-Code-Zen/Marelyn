import PropTypes from 'prop-types'
import ButtonStyled from './ButtonStyled'

const Button = ({ onClick, children, background, size, color }) => {
  return (
    <ButtonStyled type='button'
      onClick={onClick}
      background={background}
      size={size}
      color={color}
    >
      {children}
      <div className="arrow-wrapper">
        <div className="arrow"></div>
      </div>
    </ButtonStyled>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
}

export default Button
