import React from 'react';

const Book = ({ book }) => {
  const { title, author } = book;
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
    </li>;
};
export default Book;
