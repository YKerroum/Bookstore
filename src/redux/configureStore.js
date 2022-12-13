import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;