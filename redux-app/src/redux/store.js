import {configureStore} from "@reduxjs/toolkit"
import demo from "./reducer";

const storeData = configureStore({
    reducer : {
        count : demo.reducer,
    }
})

export default storeData;
