import H1 from '../../Global-styles/Components/Titles'
import HeaderStyles from './HeaderStyles'
import PropTypes from 'prop-types'

const Header = ({ image, children, title, position, left }) => {
  return (
    <HeaderStyles className=''image={image} title='' position={position} left={left} >
      <img src="../src/assets/logoMarely.png" alt="logo-marelyn" />
      <H1>{title}</H1>
      {children}
    </HeaderStyles>
  )
}

Header.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  position: PropTypes.string,
  left: PropTypes.string
}

export default Header
