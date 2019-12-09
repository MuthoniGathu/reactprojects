import React, { Component } from "react";

export default class Done extends Component {
  render() {
    const { text, id } = this.props.task;
    const { deleteTodo } = this.props;
    return (
      <>
        <li className="mb-4">
          {" "}
          {text}{" "}
          <button
            className="btn btn-default btn-xs fa-pull-right"
            onClick={() => {
              deleteTodo(id);
            }}
          >
            <span className="close-btn">
              <i className="fas fa-window-close "></i>
            </span>
          </button>
        </li>
      </>
    );
  }
}
