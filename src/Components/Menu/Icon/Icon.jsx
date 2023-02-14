import PropTypes from 'prop-types'
import IconStyles from './IconStyles'

const Icon = ({ src, size, margin, position }) => {
  return (
    <IconStyles
    src={src}
    size={size}
    margin={margin}
    position={position}
    >
    </IconStyles>
  )
}

Icon.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  margin: PropTypes.string,
  position: PropTypes.string
}

export default Icon
