import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../utils/userslice'; 
import skinReducer from '../utils/skinSlice';
import productReducer from '../utils/productSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    skin: skinReducer, 
    products: productReducer,
  },
});