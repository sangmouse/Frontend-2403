import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import counterReducer from "./counterSlice";
import userPage2Slice from "./userPage2Slice";

export default configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    userPage2: userPage2Slice,
  },
});
