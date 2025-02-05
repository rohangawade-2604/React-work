import {createSlice} from "@reduxjs/toolkit"

const demo = createSlice({
    name : "count",
    initialState: 0,
    reducers : {
        Increment : (num) => num+1,
        Decrement : (num) => num-1,
        reset : (num) => 0,
    }
})

export const {Increment , Decrement , reset} = demo.actions;
export default demo;