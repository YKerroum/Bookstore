import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { id, title, author } = book;
  const books = useSelector((state) => state.books.books);
  // handler to remove a book after clicking on remove button
  const handleDelete = (ind) => {
    const index = books.findIndex((bookItem) => bookItem.id === ind);
    dispatch(removeBook(index));
  };

  return (
    <li>
      <div className="book">
        <div className="book-info">
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
          <div className="book-buttons">
            <button type="button" className="book-button" onClick={() => handleDelete(id)}>Remove</button>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
