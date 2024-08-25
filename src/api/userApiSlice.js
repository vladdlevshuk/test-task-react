import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/apiConstants';

export const userApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: (username) => `users?username=${username}`,
    }),
  }),
});

export const { useFetchUserQuery } = userApiSlice;
