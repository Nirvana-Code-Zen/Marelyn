import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const UserContext = createContext({ isLogged: false })

const User = ({ children }) => {
  const [user] = useState({ isLogged: false })

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

User.propTypes = {
  children: PropTypes.node.isRequired
}

export default User
