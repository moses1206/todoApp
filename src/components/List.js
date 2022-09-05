import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px ",
    borderRadius: "10px",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleDelete = (id) => {
    let newToDoData = todoData.filter((item) => item.id !== id);
    console.log("newToDoData", newToDoData);
    setTodoData(newToDoData);
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodoData(newTodoData);
  };
  return (
    <div>
      {todoData.map((todo) => {
        return (
          <div key={todo.id} style={getStyle(todo.completed)}>
            <input
              type='checkbox'
              defaultChecked={false}
              onChange={() => handleCompleteChange(todo.id)}
            />
            {todo.title}
            <button style={btnStyle} onClick={() => handleDelete(todo.id)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
