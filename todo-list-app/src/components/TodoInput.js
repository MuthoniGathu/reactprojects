import React, { Component } from "react";

export class TodoInput extends Component {
  // state = {
  //   todoInput: ""
  // };
  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setstate({
  //     [name]: value
  //   });
  // };

  render() {
    const { handleChange, value, handleSubmit, handleClear } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="todoInput"
            className="form-control add-todo"
            placeholder="Add Todo"
            onChange={handleChange}
            value={value}
          />
        </form>
        {/* <div className="row">
            <div className="col-md-12 text-center">
              <div className="btn-group btn-group-lg mt-2">
                <button
                  type="submit"
                  className="btn btn-primary mr-5 rounded-right"
                >
                  Add Task
                </button>
                <button type="button" className="btn btn-success rounded-left">
                  Mark all as done
                </button>
              </div>
            </div>
          </div> */}
        <button id="checkAll" className="btn btn-success" onClick={handleClear}>
          Mark all as done
        </button>
        <hr />
      </>
    );
  }
}

export default TodoInput;
