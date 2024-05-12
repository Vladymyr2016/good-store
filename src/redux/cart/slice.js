import { createSlice } from '@reduxjs/toolkit';
import { addToCartThunk, fetchCartThunk } from './operations';

const initialState = {
  items: [],
  error: false,
  loading: false,
};

const slice = createSlice({
  name: 'cart',
  initialState,
  selectors: { selectCart: (state) => state.items },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addToCartThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      });
  },
});

export const cartReducer = slice.reducer;
export const { selectCart } = slice.selectors;
