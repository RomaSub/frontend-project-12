import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { channelsApi } from './channelsApi';

type UiState = {
  activeChannelId: string;
};

const initialState: UiState = {
  activeChannelId: '1'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentChannel: (state, { payload }: PayloadAction<{ channelId: string }>) => ({
      ...state,
      activeChannelId: payload.channelId
    }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(channelsApi.endpoints.removeChannel.matchFulfilled, (state) => {
      state.activeChannelId = '1'
    })
  }
});

export const {setCurrentChannel} = uiSlice.actions;
export default uiSlice.reducer;
