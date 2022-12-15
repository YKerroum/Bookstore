import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import books from './books/bookSlice';

const store = configureStore({
  reducer: {
    books,
    categories: categoriesReducer,
  },
});

export default store;
