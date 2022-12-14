import React from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';

const BooksContainer = () => (
  <main className="container">
    <BooksList />
    <div className="horizontal-divider" />
    <AddBook />
  </main>
);

export default BooksContainer;
