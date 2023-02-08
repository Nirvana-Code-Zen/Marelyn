import H1 from '../../Global-styles/Components/Titles'
import HeaderStyles from './HeaderStyles'
import PropTypes from 'prop-types'

const Header = ({ image }) => {
  return (
    <HeaderStyles className=''image={image} >
      <img src="../src/assets/logoMarely.png" alt="logo-marelyn" />
      <H1>Zapateria Marelyn</H1>
    </HeaderStyles>
  )
}

Header.propTypes = {
  image: PropTypes.string
}
export default Header
