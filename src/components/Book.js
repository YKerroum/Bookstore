import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ isLoading, books }) => {
  const dispatch = useDispatch();
  // const { id, title, author } = data;
  // handler to remove a book after clicking on remove button
  const handleDelete = (ind) => {
    const index = books.findIndex((bookItem) => bookItem.id === ind);
    dispatch(removeBook(index));
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
