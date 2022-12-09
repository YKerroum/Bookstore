import React, { useState } from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';

const BooksContainer = () => {
  const getInitialBooks = () => {
  // getting books from API
    const temp = [{ id: 2, title: 'Books', author: 'Author' }];
    return temp || [];
  };
  // initializing books from received data
  const [books] = useState(getInitialBooks());
  // render books list
  return (
    <main className="container">
      <BooksList books={books} />
      <div className="horizontal-divider" />
      <AddBook />
    </main>
  );
};

export default BooksContainer;
