import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'



function Profile() {

    // Below line shows how we read data of user using UserCOntext
    const {user}=useContext(UserContext)

    if(!user)
        return <div>Please Login</div>
    return <div>Welcome {user.userName}</div>
}

export default Profile