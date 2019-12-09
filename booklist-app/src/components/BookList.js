import React from "react";
import Book from "./Book";

const BookList = props => {
  const { books, deleteBook } = props;

  return (
    <>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => {
            return <Book key={book.isbn} book={book} deleteBook={deleteBook} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
