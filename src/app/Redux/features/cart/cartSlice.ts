// cartSlice.ts
"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCartAction: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    // Add other actions like clearing the cart, updating quantity, etc.
  },
});

export const { addToCartAction, removeFromCartAction } = cartSlice.actions;

export default cartSlice.reducer;

