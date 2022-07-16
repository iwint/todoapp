import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);

      //state.todos=action.payload;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((e, i) => i !== action.payload);
      // state.todos.filter((e, i) => {
      //   // console.log(i !== action.payload, i, action.payload);
      //   return i !== action.payload;
      // });
      // state.todos.filter(
      //   (index) => {
      //     return action.payload.index !== index;
      //   }

      //   // console.log("Item Id", id);
      // );
      console.log("State of Todos", state.todos, action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const ViewTodos = (state) => state.todo.todos;
export const { removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
