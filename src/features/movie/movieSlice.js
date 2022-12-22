import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  recommend: null,
  newDisney: null,
  Original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.Original = action.payload.Original;
      state.trending = action.payload.trending;
      console.log(action.payload);
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectRecommended = (state) => state.movies.recommend;
export const selectnewDisney = (state) => state.movies.newDisney;
export const selectOriginal = (state) => state.movies.Original;
export const selectTrending = (state) => state.movies.trending;
export default movieSlice.reducer;
