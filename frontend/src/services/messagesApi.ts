import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './apiConfig';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery,
  tagTypes: ['Message'],
  endpoints: builder => ({
    getMessages: builder.query({
      query: () => 'messages',
      providesTags: ['Message']
    }),
    addMessage: builder.mutation({
      query: message => ({
        url: 'messages',
        method: 'POST',
        body: message
      }),
      invalidatesTags: ['Message']
    })
  })
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesApi;
