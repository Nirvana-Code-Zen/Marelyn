import H1 from '../../Global-styles/Components/Titles'
import HeaderStyles from './HeaderStyles'
import PropTypes from 'prop-types'

const Header = ({ image, children }) => {
  return (
    <HeaderStyles className=''image={image} >
      <img src="../src/assets/logoMarely.png" alt="logo-marelyn" />
      <H1>Zapateria Marelyn</H1>
      {children}
    </HeaderStyles>
  )
}

Header.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node
}
export default Header
