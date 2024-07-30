//import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
//
//
//export const fetchChannels = createAsyncThunk(
//  'channels/fetchChannels',
//  async (headers, )
//)
//
//const channelsAdapter = createEntityAdapter();
//
//const initialState = channelsAdapter.getInitialState();
//
//const channelsSlice = createSlice({
//  name: 'channels',
//  initialState,
//  reducers: {
//    addChannel: (state, { payload }) => channelsAdapter.addOne(state, payload.name),
//    renameChannel: (state, { payload }) => channelsAdapter.upsertOne(state, payload.name),
//    removeChannel: (state, { payload }) => channelsAdapter.removeOne(state, payload.id)
//  }
//});
