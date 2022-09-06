import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function List({ todoData, setTodoData }) {
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

  const handleEnd = (result) => {
    console.log("result", result);
    if (result.destination) return;

    const movingTodoData = todoData;
    // 1. 변경시키려는 아이템을 배열에서 지워준다
    // 2. 리턴값으로 지워진 아이템을 잡아줍니다.
    const [reorderItem] = movingTodoData.splice(result.source.index, 1);

    // 3. 원하는 자리에 reorderItem을 insert 해줍니다
    movingTodoData.splice(result.destination.index, 0, reorderItem);
    setTodoData(movingTodoData);
  };

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId='to-dos'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((todo, index) => (
              <Draggable
                key={todo.id}
                draggableId={todo.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    key={todo.id}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    className={`${
                      snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                    } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded `}
                  >
                    <div className='items-center'>
                      <input
                        type='checkbox'
                        defaultChecked={false}
                        onChange={() => handleCompleteChange(todo.id)}
                      />
                      <span
                        className={`${
                          todo.completed ? "line-through" : undefined
                        }`}
                      >
                        {" "}
                        {todo.title}
                      </span>
                    </div>
                    <div>
                      <button
                        className='px-4 py-2 float-right'
                        onClick={() => handleDelete(todo.id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
