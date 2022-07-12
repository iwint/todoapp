import React from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  return (
    <div className="App flex justify-center items-center h-screen text-[#ffffff] ">
      <div className="grid grid-cols-8">
        <div className="  p-5 rounded  bg-slate-900   col-span-8 md:w-[800px]">
          <div className="  text-2xl font-bold text-center ">My Todos</div>
          <Input />
          <Output />
        </div>
      </div>
    </div>
  );
}

export default App;
