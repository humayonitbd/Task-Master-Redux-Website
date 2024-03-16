import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:"Humayon Forid",
    email:"humayonforid@gmail.com",
    
}
const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{

    }
})

export const { addTask, removeTask, updateStatus } = userSlice.actions;

export default userSlice.reducer;