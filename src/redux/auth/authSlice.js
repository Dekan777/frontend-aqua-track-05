import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  updateUser,
  uploadPhoto,
} from './operations';
import persistReducer from 'redux-persist/es/persistReducer';

const authInitialState = {
  user: {
    name: null,
    email: null,
    avatar: '',
    gender: null,
    weight: null,
    sportTime: null,
    dailyWater: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(uploadPhoto.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.user.push(action.payload);
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(uploadPhoto.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.user.findIndex(
          item => item.id === action.payload.id
        );
        state.user(...action.payload);
        state.isLoggedIn = true;
      })
      .addCase(updateUser.rejected, state => {
        state.isRefreshing = false;
        state.isRefreshing = false;
      });
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
