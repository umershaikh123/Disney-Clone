import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   original: []
}

const originalSlice = createSlice({
    name: "original",
    initialState,
    reducers: {
        setoriginalMovie: (state, action) => {
            state.original  = action.payload
        }
    }
})

export const { setoriginalMovie } = originalSlice.actions;

export const selectoriginalMovie = (state) => state.original.original;

export default originalSlice.reducer;