import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk('book/getBooks', async () => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_KEY}/books`)
  .then((res) => res.json())
  .then((data) => {
    const books = Object.keys(data).map((key) => ({ id: key, ...data[key][0] }));
    return books;
  })
  .catch((error) => {
    throw new Error(error);
  }));

export const addBook = createAsyncThunk('book/addBook', async (payload) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_KEY}/books`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    item_id: payload.id,
    title: payload.title,
    author: payload.author,
    category: 'Action',
  }),
})
  .catch((error) => {
    throw new Error(error);
  }));

export const deleteBook = createAsyncThunk('book/removeBook', async (payload) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_KEY}/books/${payload}`, {
  method: 'DELETE',
  body: JSON.stringify({
    item_id: payload,
  }),
}));

const bookSlice = createSlice({
  name: 'book',
  initialState: { books: [], loading: false },
  extraReducers: {
    [getBooks.pending]: (state) => ({ ...state, isloading: true }),
    [getBooks.fulfilled]: (state, action) => ({
      ...state,
      books: action.payload,
      isloading: false,
    }),
    [getBooks.rejected]: (state) => ({ ...state, isloading: false }),
    // Add a new book reducer status
    [addBook.pending]: (state) => ({ ...state, isloading: true }),
    [addBook.fulfilled]: (state) => ({
      ...state,
      isloading: false,
    }),
    [addBook.rejected]: (state) => ({ ...state, isloading: false }),
    // remove a book reducer
    [deleteBook.pending]: (state) => ({ ...state, isloading: true }),
    [deleteBook.fulfilled]: (state) => ({
      ...state,
      isloading: false,
    }),
    [deleteBook.rejected]: (state) => ({ ...state, isloading: false }),
  },
});
export default bookSlice.reducer;
