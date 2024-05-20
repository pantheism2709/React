import { createSlice } from "@reduxjs/toolkit";

const CartSlices = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,actions)=>{
            state.push(actions.payload);
        },
        remove:(state,actions)=>{
           return state.filter((item)=> item.id !== actions.payload);
        },
    }
});

export const {add,remove} = CartSlices.actions;
export default CartSlices.reducer