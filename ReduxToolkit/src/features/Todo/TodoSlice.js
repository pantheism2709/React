// creating reducers (reducers are nothing but functionallity) are bit different in redux toolkit


// we are creating it by createSlice

//nanoid is a method that gives you unique id


import { createSlice ,nanoid} from "@reduxjs/toolkit";


// initial state of store

const initialState={

    todos:[
    {
        id:1,
        text:"Hello world"
    }
    ]

}


// Slice is bigger version of reducers

// todoSlice means todo's related functions


//there is some name of slices , so give appropriate nane because that name will be displayed at chrome extension




export const todoSlice=createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{ // reducers me aata he property and functions

        addTodo:(state,action)=>{ // here the difference come among redux and context api , I
                        // In COntext api you just give function declaration here not definition 
        const todo ={   // but in redux declaration and definition both comes here
            id:nanoid(),//har function me 2 chijo ka access milega , ek state dega or ek action
                         // state give you current status of state,action give you the access of some value need to perform any functionality
            text:action.payload   // payload ek objet he or usme Text name ki field he to isliye me bar bar payload.text ni likhung vo khud handle ho jayega

        }               
        state.todos.push(todo)
                        
        },
        removeTodo:(state,action)=>{

            state.todos=state.todos.filter((todo)=>todo.id!==action.payload) // again vo payload.id khud handle ho jayega kyuki payload ek obect he


        }

    }
})


export const {addTodo,removeTodo}=todoSlice.actions // Ye components me kam ayenge

export default todoSlice.reducer // ye export kiya he kyuki store ko batana he ki bhai ye ye reducer he

