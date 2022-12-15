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
  },
});
export default bookSlice.reducer;
