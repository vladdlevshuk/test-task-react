import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/api';

export const postsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    getPostById: builder.query({
      query: (postId) => `posts/${postId}`,
    }),
    getCommentsByPostId: builder.query({
      query: (postId) => `comments?postId=${postId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetCommentsByPostIdQuery } = postsApiSlice;
