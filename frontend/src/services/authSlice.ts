import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type AuthState = {
  username: string | null;
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  username: localStorage.getItem('username') || null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: localStorage.getItem('token') !== null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<{ username: string; token: string }>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('token', action.payload.token);
    },
    logOut: state => {
      state.username = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    }
  }
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated
