import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../shared/api';
import { baseReducer } from '../entities/Char';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    base: baseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
