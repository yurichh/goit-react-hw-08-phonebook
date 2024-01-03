import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, register } from './operations';

export const handlePending = state => (state.isLoggedIn = false);
export const handleReject = state => (state.isLoggedIn = false);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state = { ...state, ...action.payload };
        state.isLoggedIn = true;
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state = { ...state, ...action.payload };
        state.isLoggedIn = true;
        return state;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoggedIn = true;
      }),
});
