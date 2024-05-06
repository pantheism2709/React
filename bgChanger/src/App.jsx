import {useState} from "react"
function App() {

  const [color,setColor]=useState("olive");

  return (
    <>

  <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

    <div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-3xl">

    <button
    className="outline-none px-4
    py-1  rounded-xl text-white shadow-lg bg-red-600"
     onClick={()=>{setColor("red")}}>
    Red
    </button>
    <button
    className="outline-none px-4
    py-1  rounded-xl text-white shadow-lg bg-green-600"
    onClick={()=>{setColor("green")}}>
    Green
    </button>
    <button
    className="outline-none px-4
    py-1  rounded-xl text-white shadow-lg bg-blue-600"
    onClick={()=>{setColor("blue")}}>
    Blue
    </button>
    <button
    className="outline-none px-4
    py-1  rounded-xl text-white shadow-lg bg-black"
    onClick={()=>{setColor("black")}}>
    black
    </button>
   

</div>

    </div>


  </div>



      
    </>
  )
}

export default App
