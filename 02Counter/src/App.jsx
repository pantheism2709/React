import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Now if we want to change the value of a single variable used at multiple places using Documennt.getElementById then it will become so messy ... at this place react helps us by providing the state concept ... if the state of  a variable got changed it will change the value at every place where it has been using

  let counter=5

  let [count,setCount]=useState(15)


  const addValue=()=>{
    if(count+1<=20)
    setCount(count+1);

    // counter=counter+1
    // console.log("value added",Math.random());

    console.log("clicked",counter);
  }
  const decreaseValue=()=>{
    if(count-1>=0)
    setCount(count-1);

    // console.log("value Decreased",Math.random());
  }

  return (
    <>
     <h1>Hey World...!</h1>
     <h2>Counter value: {count}</h2>
     <button onClick={addValue}>Add value {count}</button>
     <br/>
     <button onClick={decreaseValue}>remove value {count}</button>

     <footer>Footer : {count}</footer>

    </>
  )
}

export default App
