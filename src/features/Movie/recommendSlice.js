import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   recommend: []
}

const recommendSlice = createSlice({
    name: "recommend",
    initialState,
    reducers: {
        setRecommendMovie: (state, action) => {
            state.recommend  = action.payload
        }
    }
})

export const { setRecommendMovie } = recommendSlice.actions;

export const selectRecommendMovie = (state) => state.recommend.recommend;

export default recommendSlice.reducer;