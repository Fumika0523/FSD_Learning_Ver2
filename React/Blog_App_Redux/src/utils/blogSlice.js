import { createSlice } from "@reduxjs/toolkit"

const blogSlice=createSlice({
    name:"blog",
    initialState:{
        items:[]//kept as a empty
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            console.log(action.payload)
        },
      //Remove All
      removeItem:(state,action)=>{
        state.items=[]
      },
    }
    })
    export const {addItem,removeItem} = blogSlice.actions
    export default blogSlice.reducer