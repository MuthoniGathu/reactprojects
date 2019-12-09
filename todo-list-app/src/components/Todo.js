import React, { Component } from "react";

export class Todo extends Component {
  render() {
    const { id, text, completed } = this.props.todo;
    const { checked, handleChange, markComplete } = this.props;
    return (
      <>
        <li className="ui-state-default">
          <div className="checkbox">
            <label className="text-capitalize">
              <input
                type="checkbox"
                name="isComplete"
                // checked={checked}
                onChange={() => markComplete(id)}
              />
              {text}
            </label>
          </div>
        </li>
      </>
    );
  }
}

export default Todo;
