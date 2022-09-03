import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px ",
    borderRadius: "10px",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  state = {
    todoData: [],
    value: "",
  };

  deleteHandler = (id) => {
    let newToDoData = this.state.todoData.filter((item) => item.id !== id);
    console.log("newToDoData", newToDoData);
    this.setState({ todoData: newToDoData });
  };

  createHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let addData = { id: Date.now(), title: this.state.value, completed: false };
    this.setState({ todoData: [...this.state.todoData, addData] });
    this.setState({ value: "" });
  };

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div>
            <h1>할일목록</h1>
            <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='value'
                style={{ flex: "10", padding: "5px" }}
                placeholder='해야할 일을 입력 하세요!!'
                value={this.state.value}
                onChange={this.createHandler}
              />
              <input
                type='submit'
                value='입력'
                className='btn'
                style={{ flex: "1" }}
              />
            </form>

            {this.state.todoData.map((todo) => {
              return (
                <div key={todo.id} style={this.getStyle(todo.completed)}>
                  <input
                    type='checkbox'
                    defaultChecked={false}
                    onChange={() => this.handleCompleteChange(todo.id)}
                  />
                  {todo.title}
                  <button
                    style={this.btnStyle}
                    onClick={() => this.deleteHandler(todo.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
