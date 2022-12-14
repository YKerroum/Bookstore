import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div className="inner">
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
