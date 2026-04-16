import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../utils/userslice'; 
import skinReducer from '../utils/skinSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    skin: skinReducer, 
  },
});