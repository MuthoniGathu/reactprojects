import React, { Component } from "react";
import BookInput from "./components/BookInput";
import BookList from "./components/BookList";
import booksData from "./booksData";

export class App extends Component {
  state = {
    books: booksData,
    title: "",
    author: "",
    isbn: "",
    errors: {
      title: "",
      author: "",
      isbn: ""
    }
  };

  formValid = errors => {
    let valid = true;

    // validate the form was filled out
    Object.values(errors).forEach(value => {
      value === "" && (valid = false);
    });

    return valid;
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.formValid(this.state.errors)) {
      // create a new book object
      const newBook = {
        title: this.state.title,
        author: this.state.author,
        isbn: this.state.isbn
      };

      // add the new book to the books array
      const updatedBooks = [...this.state.books, newBook];

      this.setState({
        books: updatedBooks,
        title: "",
        author: "",
        isbn: ""
      });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  deleteBook = isbn => {
    const filteredBooks = [
      ...this.state.books.filter(book => book.isbn !== isbn)
    ];
    this.setState({
      books: filteredBooks
    });
  };

  render() {
    const { title, author, isbn, books, formError } = this.state;
    return (
      <div>
        <div className="container mt-4">
          <h1 className="display-4 text-center">
            <i className="fas fa-book-open text-primary "></i>My
            <span className="text-primary">Book</span>List
          </h1>
          <BookInput
            title={title}
            author={author}
            isbn={isbn}
            formError={formError}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <BookList books={books} deleteBook={this.deleteBook} />
        </div>
      </div>
    );
  }
}

export default App;
