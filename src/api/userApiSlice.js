import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: (username) => `users?username=${username}`,
    }),
  }),
});

export const { useFetchUserQuery } = userApiSlice;
