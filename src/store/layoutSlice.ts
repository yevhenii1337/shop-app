// layoutSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
  isSideCartOpen: boolean;
  // Додайте інші поля лейаута, якщо потрібно
}

const initialState: LayoutState = {
  isSideCartOpen: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSideCart: (state) => {
      state.isSideCartOpen = !state.isSideCartOpen;
    },
    // Додайте інші action creators для інших полів лейаута, якщо потрібно
  },
});

export const { toggleSideCart } = layoutSlice.actions;
export default layoutSlice.reducer;