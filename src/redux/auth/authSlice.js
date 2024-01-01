import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './operations';

export const handlePending = state => state;
export const handleReject = state => state;

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
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        return state;
      })
      .addCase(logIn.rejected, handleReject),
});
