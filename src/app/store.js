import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

// import { reducer } from "../features/user/userSlice";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
