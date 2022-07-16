import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo";

function Input() {
  const [Input, setInput] = useState(null);
  const dispatch = useDispatch();

  const AddTodo = () => {
    console.log(`Adding ${Input}`);
    dispatch(
      addTodo({
        task: Input,
      })
    );
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[600px] container my-4 p-3 bg-[#444444] flex items-center justify-center">
        <label htmlFor="text" className="text-sm">
          Task
        </label>
        <input
          type="text"
          value={Input}
          className="ml-2 p-1  w-[300px] mt-2 rounded text-[#000000] bg-none"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          className="ml-3 w-[80px] bg-yellow-500 h-9 px-3  rounded-[20px] hover:bg-[#ffffffff] text-[#000000]"
          onClick={AddTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
