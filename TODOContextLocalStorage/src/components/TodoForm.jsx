import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {

    const [todo, setTodo] = useState("")
    const {addTodos}=useTodo();


    const add=(e)=>{

        e.preventDefault()

        if(!todo) return 

        // addTodos({todo:todo,completed:false})
        addTodos({todo,completed:false}) // since name of key and value are same then we can just write key


        setTodo("")


    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}  // ise wiring bolte he
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

