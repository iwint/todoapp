import React from "react";
import { useSelector } from "react-redux";
import { ViewTodos } from "../features/Todo";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/Todo";

function Output() {
  const todos = useSelector(ViewTodos);
  const dispatch = useDispatch();

  // const todos = [
  //   {
  //     task: "Learn React",
  //     id: "123456",
  //   },
  //   {
  //     task: "Learn Redux",
  //     id: "123454",
  //   },
  // ];

  return (
    <div className="flex justify-center items-center max-h-screen">
      <div className="container  my-4 p-3 bg-[#444444] w-[600px] flex-row justify-center items-center">
        <h4 className="text-center font-bold text-xl">Todo List</h4>
        {todos.map((item, index) => {
          return (
            <div className="grid grid-flow-row" key={index}>
              <div className="flex justify-between items-center">
                <h4 className="text-xl p-2 text-[yellow]">{item.task} </h4>
                <button
                  className="ml-3 w-[80px] bg-yellow-500 h-9 px-3  rounded-[20px] hover:bg-[#ffffffff] text-[#000000]"
                  onClick={() => {
                    console.log(todos);
                    dispatch(removeTodo(index));
                  }}
                >
                  Remove
                </button>
              </div>

              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Output;
