import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const cartAPI = axios.create({
  baseURL: 'https://661e4a8898427bbbef0414b2.mockapi.io',
});

export const fetchCartThunk = createAsyncThunk(
  'fetchData',
  async (_, thunkApi) => {
    try {
      const { data } = await cartAPI.get('/cart');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
