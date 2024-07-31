import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './apiConfig';

export const channelsApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery,
  endpoints: builder => ({
    getChannels: builder.query({
      query: () => 'channels'
    }),
    addChannel: builder.mutation({
      query: channelName => ({
        url: 'channels',
        method: 'POST',
        body: channelName
      })
    }),
    editChannel: builder.mutation({
      query: ({ channelName, channelId }) => ({
        url: `channels/${channelId}`,
        method: 'PATCH',
        body: channelName
      })
    }),
    removeChannel: builder.mutation({
      query: channelId => ({
        url: `channels/${channelId}`,
        method: 'DELETE'
      })
    })
  })
});

export const { useGetChannelsQuery, useEditChannelMutation, useAddChannelMutation, useRemoveChannelMutation } = channelsApi;
