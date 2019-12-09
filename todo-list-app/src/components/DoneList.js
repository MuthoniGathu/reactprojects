import React, { Component } from "react";
import Done from "./Done";

export class DoneList extends Component {
  render() {
    const { completeTasks, deleteTodo } = this.props;

    return (
      <div className="col-md-6">
        <div className="todolist">
          <h1>Already Done</h1>
          <ul id="done-items" className="list-unstyled">
            {completeTasks.map(task => {
              return <Done key={task.id} task={task} deleteTodo={deleteTodo} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default DoneList;
