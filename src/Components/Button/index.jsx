import PropTypes from 'prop-types'
import ButtonStyled from './ButtonStyled'

const Button = ({ onClick, children, background }) => {
  return (
    <ButtonStyled onClick={onClick} background={background}>
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
  background: PropTypes.string
}

export default Button
