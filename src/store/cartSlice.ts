import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const product = action.payload;
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );

      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartProducts = (state: RootState) => state.cart.products;
