import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './apiConfig';
import type { RootState } from './store';

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
      query: ({ name, channelId }) => ({
        url: `channels/${channelId}`,
        method: 'PATCH',
        body: name
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

export const selectChannels = (state: RootState) => channelsApi.endpoints.getChannels.select({})(state).data;
