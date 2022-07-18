import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   trending: []
}

const trendingSlice = createSlice({
    name: "trending",
    initialState,
    reducers: {
        settrendingMovie: (state, action) => {
            state.trending  = action.payload
        }
    }
})

export const { settrendingMovie } = trendingSlice.actions;

export const selecttrendingMovie = (state) => state.trending.trending;

export default trendingSlice.reducer;