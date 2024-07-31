import { configureStore } from "@reduxjs/toolkit";
import blogSlice from './blogSlice'

const store=configureStore({
    //contain the slices
    reducer:{
        blog:blogSlice,
    },
})
export default store