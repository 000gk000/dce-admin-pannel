import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./slices/SidebarSlice";
import SidebarSelectedItem from "./slices/SidebarSelectedItem";


const store = configureStore({
    reducer:{
            sidebar:SidebarSlice,
            sidebarSelected : SidebarSelectedItem
    }
})

export default store;