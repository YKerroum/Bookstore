import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/bookSlice';

const Book = ({ isLoading, books }) => {
  const dispatch = useDispatch();
  const handleDelete = (ind) => {
    dispatch(deleteBook(ind));
  };

  const bookListGenerator = books.map(
    ({ id, title, author }) => (
      <li key={id}>
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
    ),
  );
  return (<ul>{isLoading ? 'loading...' : (bookListGenerator)}</ul>);
};

Book.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Book;
