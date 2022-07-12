import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/Todo";

export const store = configureStore({
  reducer: { todo: TodoReducer },
});
