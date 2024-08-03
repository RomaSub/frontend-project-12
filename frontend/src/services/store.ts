import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { channelsApi } from './channelsApi';
import { messagesApi } from './messagesApi';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(channelsApi.middleware, messagesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
