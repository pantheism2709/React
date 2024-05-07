import { createContext,useContext,useContextexport  } from "react";

export const TodoContext=createContext({

    todos:[
        {
            id: 1,
            todo:"Todo msg",
            completed: false,
        }
    ],
    addTodos:(todo)=>{},
    updateTodos:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider