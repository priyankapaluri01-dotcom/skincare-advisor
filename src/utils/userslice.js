import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    // primary boolean used by the app
    isAuthenticated: false,
    // keep backward-compatible flag used elsewhere
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

// Selectors for convenience
export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer;