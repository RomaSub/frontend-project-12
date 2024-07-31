import { configureStore } from '@reduxjs/toolkit';
import { channelsApi } from './channelsApi';
import authReducer from './authSlice';
import uiReducer from './uiSlice';
import { messagesApi } from './messagesApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(channelsApi.middleware, messagesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
