import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleBook = (title, author) => {
    const id = uuid().replaceAll('-', '');
    const newBook = {
      id,
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <section className="add-book">
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <form
        className="add-book-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleBook(title, author);
          setTitle('');
          setAuthor('');
        }}
      >
        <input
          type="text"
          name="title"
          className="add-book-input"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          className="add-book-input"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <div className="add-book-buttons">
          <input type="submit" className="add-book-button" value="ADD BOOK" />
        </div>
      </form>
    </section>
  );
};

export default AddBook;
