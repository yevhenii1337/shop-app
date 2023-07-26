// productsSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

interface Product {
  id: number;
  title: string;
  price: 13.5,
  description: string,
  image: string,
  category: string,
  // Додайте інші поля, які вам потрібні
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Типи для успішної дії
type FetchProductsSuccess = Product[];

// Типи для помилкової дії
interface FetchProductsError {
  message: string;
}

export const fetchProducts = createAsyncThunk<FetchProductsSuccess, void, { rejectValue: FetchProductsError }>(
  'products/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      // Повертаємо об'єкт з властивістю "message" у разі помилки
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<FetchProductsSuccess>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action: PayloadAction<FetchProductsError>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default productsSlice.reducer;
