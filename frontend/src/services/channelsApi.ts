import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './apiConfig';

export const channelsApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery,
  tagTypes: ['Channel'],
  endpoints: builder => ({
    getChannels: builder.query({
      query: () => 'channels',
      providesTags: ['Channel']
    }),
    addChannel: builder.mutation({
      query: channelName => ({
        url: 'channels',
        method: 'POST',
        body: channelName
      }),
      invalidatesTags: ['Channel']
    }),
    editChannel: builder.mutation({
      query: ({ channelName, channelId }) => ({
        url: `channels/${channelId}`,
        method: 'PATCH',
        body: channelName
      }),
      invalidatesTags: ['Channel']
    }),
    removeChannel: builder.mutation({
      query: channelId => ({
        url: `channels/${channelId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Channel']
    })
  })
});

export const { useGetChannelsQuery, useEditChannelMutation, useAddChannelMutation, useRemoveChannelMutation } = channelsApi;
