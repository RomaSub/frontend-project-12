import { configureStore } from '@reduxjs/toolkit';
import { channelsApi } from './channelsApi';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(channelsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
