import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
  isSideCartOpen: boolean;
}

const initialState: LayoutState = {
  isSideCartOpen: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSideCart: (state) => {
      state.isSideCartOpen = !state.isSideCartOpen;
    },
  },
});

export const { toggleSideCart } = layoutSlice.actions;
export default layoutSlice.reducer;
