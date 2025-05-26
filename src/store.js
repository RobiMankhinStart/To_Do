import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./Redux/TodoSlice";
const store = configureStore({
  reducer: {
    first: TodoReducer,
  },
});
export default store;
