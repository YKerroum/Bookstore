import React from 'react';

const AddBook = () => (
  <section className="add-book">
    <h2 className="add-book-title">ADD NEW BOOK</h2>
    <form className="add-book-form">
      <input type="text" name="title" className="add-book-input" placeholder="Book title" />
      <input type="text" name="author" className="add-book-input" placeholder="Book author" />
      <div className="add-book-buttons">
        <button type="button" className="add-book-button">ADD BOOK</button>
      </div>
    </form>
  </section>

);

export default AddBook;
