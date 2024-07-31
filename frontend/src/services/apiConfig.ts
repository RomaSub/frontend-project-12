import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { RootState } from './store';
import { io } from 'socket.io-client';

export const baseQuery = fetchBaseQuery({
  baseUrl: '/api/v1/',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

