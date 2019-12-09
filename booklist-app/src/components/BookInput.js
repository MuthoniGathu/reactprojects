import React, { Component } from "react";

export class BookInput extends Component {
  render() {
    const { title, author, isbn, handleChange, handleSubmit } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              name="author"
              className="form-control"
              value={author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>ISBN#</label>
            <input
              type="text"
              name="isbn"
              className="form-control"
              value={isbn}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btb btn-primary btn-block"
            onChange={handleChange}
          />
        </form>
      </>
    );
  }
}

export default BookInput;
