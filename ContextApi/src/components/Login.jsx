import React from 'react'

import { useState,useContext } from 'react'

import UserContext from '../context/userContext'

function Login() {

    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')


    // This is we are taking the method of setting user at UserContext
    const {setUser}=useContext(UserContext)

// here we are setting the object having userrname and password in user using setUser

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userName,password})
    }



    
  return (
    <div>
    <h2>Login</h2>
    <input type='text' placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
    {"           "}
    <input type='text' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  
  )
}

export default Login