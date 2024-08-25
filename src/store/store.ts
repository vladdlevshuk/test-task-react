import { configureStore } from '@reduxjs/toolkit';
import { postsApiSlice } from '../api/postsApiSlice';
import { userApiSlice } from '../api/userApiSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApiSlice.middleware)
      .concat(userApiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
