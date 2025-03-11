import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
  },
});

export default productSlice.reducer;