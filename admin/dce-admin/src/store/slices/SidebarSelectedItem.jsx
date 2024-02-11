
import  { createSlice} from '@reduxjs/toolkit';

const sidebarSelectedSlice = createSlice({
    name: "sidebarTab",
    initialState:{
        selectedIndex : 0
    },
    reducers:{
        setSelectedIndex(state,action){
            state.selectedIndex = action.payload
        }
    }
})

export const {setSelectedIndex} = sidebarSelectedSlice.actions;
export default sidebarSelectedSlice.reducer;