import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            // passing the id up to app.js
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// PropTyp
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
const btnStyle = {
  background: "#ff0000",
  color: "fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50px",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
