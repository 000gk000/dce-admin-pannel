import { createSlice } from "@reduxjs/toolkit";


const SidebarSlice = createSlice({
    name: "isVisible",
    initialState : {isVisible:false},
    reducers: {
            toggleSidebar: (state) =>{
                state.isVisible = !state.isVisible
            },
            
    }
 }
);

export default SidebarSlice.reducer;
export const {toggleSidebar} = SidebarSlice.actions;