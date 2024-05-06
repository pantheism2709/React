import { useState } from 'react'

import viteLogo from '/vite.svg'

import Chai from './Chai'

function App() {
  
 const userName="Sachin Mishra"
  return (
    <>


    {/* curly braces me jo likhte he use bolte he "evaluated expression" ... hum curly braces me JS nahi likhte instead Js ka jo final outcome hota he vo curly braces me likhte he */}
            
      <h1 className="read-the-docs">
        heyya this is my First React app using Vite .. UserName:- {userName} 
      </h1>

      <Chai/>
    </>
  )
}

export default App
