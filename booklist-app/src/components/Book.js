import React from "react";

const Book = props => {
  const { title, author, isbn } = props.book;
  const { deleteBook } = props;
  // console.log(props.book);
  return (
    <>
      <tr>
        <td className="text-capitalize">{title}</td>
        <td>{author}</td>
        <td>{isbn}</td>
        <td>
          <button
            className="btn btn-default btn-xs fa-pull-right"
            onClick={() => {
              deleteBook(isbn);
            }}
          >
            <span className="close-btn">
              <i className="fas fa-window-close "></i>
            </span>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Book;
