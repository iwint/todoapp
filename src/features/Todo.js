import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [""],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      //state.todos=action.payload;
    },
    // removeTodo: (state, action) => {
    //   state.todos = initialState.todos;
    // },
  },
});

export const { addTodo } = todoSlice.actions;
export const ViewTodos = (state) => state.todo.todos;
// export const { removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
