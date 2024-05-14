import React from 'react'

import { useState } from 'react'

import {useDispatch} from 'react-redux'
import { addTodo } from '../features/Todo/TodoSlice'

function AddTodo() {

    const [input, setInput] = useState('')

    const dispatch=useDispatch() // Dispatcher is basically to send any signal to store 
                                   //  we basically use dipatcher when we want to dispatch any
                                   // value to be set in the state at Store (single soure of truth)

    const addTodoHandler=(e)=>{
        e.preventDefault()

        dispatch(addTodo(input)) // dispatcher use Reducers to set the value in the states at store
                                // koi bhi action bole to reducer component me use karna he to useDispatcher ka use 
                                // karne ke bad uske andar use kar payenge
        setInput("")
    }




  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
  </form>
)
}

export default AddTodo