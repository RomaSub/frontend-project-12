import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { channelsApi } from './channelsApi';
import { RootState } from './store';

type UiState = {
  activeChannelId: string;
  modal: {
    type: 'add' | 'delete' | 'edit' | null;
    isOpened: boolean;
    channelId: string | null;
  };
};

const initialState: UiState = {
  activeChannelId: '1',
  modal: {
    isOpened: false,
    type: null,
    channelId: null
  }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentChannel: (state, { payload }: PayloadAction<{ channelId: string }>) => {
      state.activeChannelId = payload.channelId;
    },
    openModal: (state, { payload }: PayloadAction<{ type: 'add' | 'delete' | 'edit'; channelId: string | null }>) => {
      state.modal = {
        isOpened: true,
        type: payload.type,
        channelId: payload.channelId ?? null
      };
    },
    closeModal: state => {
      state.modal = {
        isOpened: false,
        type: null,
        channelId: null
      };
    }
  },
  extraReducers: builder => {
    builder.addMatcher(channelsApi.endpoints.removeChannel.matchFulfilled, state => {
      state.activeChannelId = '1';
    });
  }
});

export const { setCurrentChannel, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
export const selectActiveChannelId = (state: RootState) => state.ui.activeChannelId;
export const selectChannelModalId = (state: RootState) => state.ui.modal.channelId;
