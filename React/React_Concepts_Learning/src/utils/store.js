import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import textSlice from './textSlice'
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";

const store=configureStore({
    //contain the slices
    reducer:{
        cart:cartSlice,
        counter:counterSlice,
        text:textSlice,
        user:userSlice,
    },
})
export default store