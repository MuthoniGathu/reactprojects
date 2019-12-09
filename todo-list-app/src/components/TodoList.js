import React, { Component } from "react";
import TodoInput from "./TodoInput";
import Todo from "./Todo";

export class TodoList extends Component {
  render() {
    const {
      todos,
      handleChange,
      value,
      handleSubmit,
      handleClear,
      checked,
      markComplete
    } = this.props;
    return (
      <div className="col-md-6">
        <div className="todolist not-done">
          <h1>Todo List</h1>
          <TodoInput
            handleChange={handleChange}
            value={value}
            handleSubmit={handleSubmit}
            handleClear={handleClear}
          />
          <ul id="sortable" className="list-unstyled">
            {todos.map(todo => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleChange={handleChange}
                  checked={checked}
                  markComplete={markComplete}
                />
              );
            })}
          </ul>

          <div className="todo-footer">
            <strong>
              <span className="count-todos"></span>
            </strong>{" "}
            {todos.length == 1
              ? `${todos.length} Item left`
              : `${todos.length} Items Left`}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
