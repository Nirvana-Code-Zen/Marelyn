import PropTypes from 'prop-types'

import {Menu} from '../Menu'

export const Layeout = ({ children }) => {
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