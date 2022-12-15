import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/bookSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const { loading, books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="inner">
      <Book
        isLoading={loading}
        books={books}
      />
    </div>
  );
};

export default BookList;
