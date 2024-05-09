import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: false,
  loading: false,
};

const slice = createSlice({
  name: 'Cart',
  initialState,
});

export const cartReducer = slice.reducer;
