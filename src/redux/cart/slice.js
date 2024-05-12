import { createSlice } from '@reduxjs/toolkit';
import { fetchCartThunk } from './operations';

const initialState = {
  items: [],
  error: false,
  loading: false,
};

const slice = createSlice({
  name: 'Cart',
  initialState,
  selectors: { selectCart: (state) => state.items },
  extraReducers: (builder) => {
    builder.addCase(fetchCartThunk.fulfilled, (state, { payload }) => {
      state.items = payload;
    });
  },
});

export const cartReducer = slice.reducer;
