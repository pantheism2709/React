import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './componenets/Card'



function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"Sachin",
    age:23
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb4'>Tailwind test</h1>

      <Card username="Chai Aur Code" btnText="Visit me" someObj={myObj}/>

      <Card/>
    </>
  )
}

export default App
