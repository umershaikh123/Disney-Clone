import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newDisney: []
}

const newDisneySlice = createSlice({
    name: "newDisney",
    initialState,
    reducers: {
        setnewDisneyMovie: (state, action) => {
            state.newDisney  = action.payload
        }
    }
})

export const { setnewDisneyMovie } = newDisneySlice.actions;

export const selectnewDisneyMovie = (state) => state.newDisney.newDisney;

export default newDisneySlice.reducer;