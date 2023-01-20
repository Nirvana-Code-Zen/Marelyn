import PropTypes from 'prop-types'
import ButtonStyled from './ButtonStyled'

const Button = ({ onClick, children, width, background }) => {
  return (
    <ButtonStyled type='button' onClick={onClick} background={background} $width_sizing={width}>
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
  width: PropTypes.string
}

export default Button
