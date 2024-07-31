import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './apiConfig';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery,
  endpoints: builder => ({
    getMessages: builder.query({
      query: () => 'messages'
    }),
    addMessage: builder.mutation({
      query: (message) => ({
        url: 'messages',
        method: 'POST',
        body: message
      })
    }),
  })
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesApi;




    //editMessage: builder.mutation({
    //  query: ({ message, messageId }) => ({
    //    url: messageId,
    //    method: 'PATCH',
    //    body: message
    //  })
    //}),
    //removeMessage: builder.mutation({
    //  query: messageId => ({
    //    url: messageId,
    //    method: 'DELETE'
    //  })
    //})

