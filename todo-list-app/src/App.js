import React, { Component } from "react";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";
import todosData from "./todosData";
import uuid from "uuid";

import "./App.css";

export class App extends Component {
  state = {
    todos: todosData,
    completeTasks: [],
    id: uuid(),
    todoInput: "",
    isComplete: false
  };

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      id: this.state.id,
      text: this.state.todoInput,
      isComplete: false
    };
    // console.log(newTodo);

    const updatedTodos = [...this.state.todos, newTodo];

    this.setState({
      todos: updatedTodos,
      id: uuid(),
      todoInput: ""
    });
  };

  handleClear = e => {
    this.setState({
      todos: []
    });
  };

  // toggles the complete state of a todo task
  markComplete = id => {
    // const completedTask = this.state.todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.completed = !todo.completed;
    //   }
    //   return todo;
    // });

    // this.setState({
    //   todos: completedTask
    // });

    this.removeTodo(id);
    this.completedTodo(id);
  };

  // remove todo item
  removeTodo = id => {
    const filteredTodo = [...this.state.todos.filter(todo => todo.id !== id)];

    this.setState({
      todos: filteredTodo
    });
  };

  completedTodo = id => {
    const completedTodo = this.state.todos.filter(todo => todo.id === id);

    // console.log(completedTodo);

    const updatedDone = [...this.state.completeTasks, completedTodo].flat();

    this.setState({
      completeTasks: updatedDone
    });
  };

  // mark done item id
  // doneId =id =>{
  //   const selectedId = this.state.completeTasks.map(todo =>
  //       todo.map(item => co )
  // }
  // delete done item
  delTodo = id => {
    const filteredDone = [
      ...this.state.completeTasks.filter(task => task.id !== id)
    ];

    this.setState({
      completeTasks: filteredDone
    });
  };

  render() {
    const { todos, todoInput, isComplete, completeTasks } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <TodoList
              todos={todos}
              handleChange={this.handleChange}
              value={todoInput}
              handleSubmit={this.handleSubmit}
              handleClear={this.handleClear}
              checked={isComplete}
              markComplete={this.markComplete}
            />
            <DoneList completeTasks={completeTasks} deleteTodo={this.delTodo} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
