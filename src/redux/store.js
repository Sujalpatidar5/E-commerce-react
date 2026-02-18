// Redux Toolkit ek essa system h jisme hum app ka shared data ek jagah store krte h (Global State Management)
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

export const store = configureStore({       //configureStore = function that creates the store
    reducer: {
        cart: cartReducer
    }
}) 
