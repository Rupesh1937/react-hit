import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  if (!user) return <h2>Please Login</h2>

  return <h3>Welcome {user.username} {user.password}</h3>
}

export default Profile
