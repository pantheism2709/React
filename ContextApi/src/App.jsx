import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>React Context Api Practice </h1>

     {/* here we are rendering two component and the data handling part has done in that components itself */}


     <Login/>

     <Profile/>



    </UserContextProvider>
  )
}

export default App
