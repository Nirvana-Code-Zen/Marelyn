import PropTypes from 'prop-types'

import Menu from '../Menu'

const Layeout = ({ children }) => {
  return (
    <>
      <Menu>
        {children}
      </Menu>
    </>
  )
}

Layeout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layeout
