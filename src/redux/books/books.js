const REMOVE_BOOK = 'REMOVE_BOOK';
const CREATE_BOOK = 'CREATE_BOOK';

const initialState = {
  books: [],
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const createBook = (payload) => ({
  type: CREATE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {books: [
      ...state.slice(0,action.payload),
      ...state.slice(action.payload+1)
      ]};
    default:
      return state;
  }
};

export default booksReducer;
