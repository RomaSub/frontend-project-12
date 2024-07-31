import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './apiConfig';
import { io } from 'socket.io-client';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery,
  endpoints: builder => ({
    getMessages: builder.query({
      query: () => 'messages',
      async onCacheEntryAdded(_, { cacheDataLoaded, updateCachedData, cacheEntryRemoved }) {
        const socket = io('http://localhost:5001/', { transports: ['websocket'] });
        try {
          await cacheDataLoaded;
          socket.on('newMessage', (message: any) => {
            updateCachedData(draft => {
              draft.push(message);
            });
          });
        } catch (error) {
          console.error('Ошибка при загрузке данных или установке WebSocket:', error);
        }
        await cacheEntryRemoved;
        socket.disconnect();
      }
    }),
    addMessage: builder.mutation({
      query: message => ({
        url: 'messages',
        method: 'POST',
        body: message
      })
    })
  })
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesApi;
