import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slise';
import { filterReducer } from './filters/slice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
  },
});
