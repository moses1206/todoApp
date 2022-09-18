import React from "react";

const List = React.memo(
  ({ todo, todoData, provided, snapshot, setTodoData }) => {
    console.log("List.js Running!!");

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
        <div
          key={todo.id}
          id={todo.id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(todo.id)}
            />
            <span className={`${todo.completed ? "line-through" : undefined}`}>
              {" "}
              {todo.title}
            </span>
          </div>
          <div>
            <button
              className="px-4 py-2 float-right"
              onClick={() => handleDelete(todo.id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default List;
