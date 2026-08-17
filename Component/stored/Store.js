import {configureStore} from "@reduxjs/toolkit";
import cartSlicer from "./Slicer";

 export const store=configureStore({
    reducer:{
        slice1:cartSlicer
    }
})
