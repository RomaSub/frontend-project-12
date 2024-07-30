import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api/v1/channels',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const channelsApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery,
  endpoints: builder => ({
    getChannels: builder.query({
      query: () => ''
    }),
    addChannel: builder.mutation({
      query: channelName => ({
        url: '',
        method: 'POST',
        body: channelName
      })
    }),
    editChannel: builder.mutation({
      query: ({ channelName, channelId }) => ({
        url: `${channelId}`,
        method: 'PATCH',
        body: channelName
      })
    }),
    removeChannel: builder.mutation({
      query: channelId => ({
        url: channelId,
        method: 'DELETE'
      })
    })
  })
});

export const { useGetChannelsQuery, useEditChannelMutation, useAddChannelMutation, useRemoveChannelMutation } = channelsApi;
