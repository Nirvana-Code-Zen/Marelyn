import PropTypes from 'prop-types'
import LogoStyles from './LogoStyles'

const Logo = ({ src, size, margin, onClick }) => {
  return (
    <LogoStyles
    src={src}
    size={size}
    margin={margin}
    onClick={onClick}
    >
    </LogoStyles>
  )
}

Logo.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func
}

export default Logo
