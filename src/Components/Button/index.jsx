import PropTypes from 'prop-types'
import ButtonStyled from './ButtonStyled'

const Button = ({ onClick, children, background, size, height, color, arrow }) => {
  return (
    <ButtonStyled type='button'
      onClick={onClick}
      background={background}
      size={size}
      height={height}
      color={color}>
      {children}
      {arrow && (
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      )}
    </ButtonStyled>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  arrow: PropTypes.bool
}

export default Button
