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

export const addToCartThunk = createAsyncThunk(
  'addToCart',
  async (product, thunkApi) => {
    try {
      const { data } = await cartAPI.post('/cart', product);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteFromCartThunk = createAsyncThunk(
  'deleteFromCart',
  async (id, thunkApi) => {
    try {
      const { data } = await cartAPI.delete(`/cart/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const incrementQtyThunk = createAsyncThunk(
  'incrementQty',
  async (product, thunkApi) => {
    try {
      const { data } = await cartAPI.put(`/cart/${product.id}`, {
        ...product,
        count: product.count + 1,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const decrementQtyThunk = createAsyncThunk(
  'decrementQty',
  async (product, thunkApi) => {
    try {
      const { data } = await cartAPI.put(`/cart/${product.id}`, {
        ...product,
        count: product.count - 1,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
