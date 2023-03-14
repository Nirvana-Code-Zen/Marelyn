import H1 from '../../Global-styles/Components/Titles'
import HeaderStyles from './HeaderStyles'
import PropTypes from 'prop-types'

const Header = ({ image, children, title, position, translateAxisX }) => {
  return (
    <HeaderStyles className=''image={image} title='' position={position} translateAxisX={translateAxisX} >
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
  translateAxisX: PropTypes.string
}
export default Header

//    right: 43.7rem; 1073 a mas
//     right: 30.7rem; 930px a mas
