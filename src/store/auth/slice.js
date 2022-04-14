import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authData: null,
  loading: false,
  hasErrors: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuthData: state => {
      state.loading = true;
    },
    getAuthDataSuccess: (state, {payload}) => {
      state.authData = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getAuthDataFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
    resetAuth: (state, action) => initialState,
  },
});

export const {getAuthData, getAuthDataSuccess, getAuthDataFailure, resetAuth} =
  AuthSlice.actions;

export default AuthSlice.reducer;
