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
    <div className='container'>
      <div className='todoBlock'>
        <div>
          <h1 className='mb-5'>할일목록</h1>
          <h1 className='text-3xl font-bold underline'>Hello World</h1>
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
