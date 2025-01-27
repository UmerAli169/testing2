import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  productName: string;
  price: number;
  category: string;
  imageKey: string;
  rating: number;
}

interface ProductsState {
  newArrivals: Product[];
  topSelling: Product[];
}

const initialState: ProductsState = {
  newArrivals: [],
  topSelling: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setNewArrivals: (state, action: PayloadAction<Product[]>) => {
      state.newArrivals = action.payload;
    },
    setTopSelling: (state, action: PayloadAction<Product[]>) => {
      state.topSelling = action.payload;
    },
  },
});

export const { setNewArrivals, setTopSelling } = productsSlice.actions;

export default productsSlice.reducer;
