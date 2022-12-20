import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import  userReducer   from "../features/user/userSlice";
// import { reducer } from "../features/user/userSlice";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware : getDefaultMiddleware({
      serializableCheck: false,
  })
});
