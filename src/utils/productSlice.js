import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchBeautyProducts = createAsyncThunk(
  'products/fetchBeauty', 
  async () => {
    const response = await axios.get('https://dummyjson.com/products/category/beauty');
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],      
    loading: false, 
    error: null,    
  },
  reducers: {
    clearProducts: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeautyProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBeautyProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBeautyProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;