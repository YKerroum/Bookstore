import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author } = book;
  return (
    <li>
      <div className="book">
        <div className="book-info">
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
          <div className="book-buttons">
            <button type="button" className="book-button">Remove</button>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
