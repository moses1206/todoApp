import React, { useState } from "react";
import "./App.css";
import Forms from "./components/Forms";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let addData = { id: Date.now(), title: value, completed: false };
    setTodoData((prev) => [...prev, addData]);
    setValue("");
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4  bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='justify-between mb-3'>
          <h1>할일목록</h1>
          <Forms
            handleSubmit={handleSubmit}
            value={value}
            setValue={setValue}
          />
          <List todoData={todoData} setTodoData={setTodoData} />
        </div>
      </div>
    </div>
  );
}
