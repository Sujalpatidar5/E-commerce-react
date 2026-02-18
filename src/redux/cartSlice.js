//Slice = specific part of the state (like cart)
//It contains initial state and reducer functions
//initialState = starting value of the slice (cart)
//reducer = function that updates the state
//action = instructions to change state

import {configureStore, createSlice} from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name : "cart",  //slice name
    initialState : [],
    reducers : {
        AddItem : (state, action) => {    //AddItem = ek action (jab user item add kre)
            state.push(action.payload)    //state.push = cart me product add kr rhe h, action.payload = jo product hm bhj rhe h
        }
    }
})

export const {AddItem} = cartSlice.actions  //exporting the action
export default cartSlice.reducer  //exporting the reducer