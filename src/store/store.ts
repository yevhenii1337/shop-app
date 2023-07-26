import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice'
import layoutReducer from './layoutSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    layout: layoutReducer,
    cart: cartReducer, // Create a new cartReducer or include it with other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;