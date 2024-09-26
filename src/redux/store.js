import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slise';

export const store = configureStore({
  reducer: {
    campersReducer,
  },
});
