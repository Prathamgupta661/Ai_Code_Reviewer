import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'

const User = ({loggedIn}) => {
  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default User
