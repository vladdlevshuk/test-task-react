import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types';

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: () => initialState,
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
