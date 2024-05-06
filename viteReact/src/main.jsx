import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'





function MyApp(){
  return (
    <>
      <div>
        <h1>
          Custom APP | Experiments
        </h1>
      </div>
    </>
  )
}

// const reactElement={
//   type:'a',
//   props:{

//       href:'https://google.com',
//       target:'_blank'


//   },
//   children:'click me to visit google'
// }

const anotherElement=(
  <a href="https://google.com" target='_blank'> Visit Google</a>
)

const reactElement=React.createElement(
  'a',
  {
    href:"https://google.com",
  target:'_blank'
  },
  'click to visit google'

)
// Creating virtual Dom
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/>

  // reactElement
  // anotherElement
  //  MyApp()
 
)
