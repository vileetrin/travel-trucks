import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    items: [],
  },
  reducers: {
    addFavourites(state, action) {
      state.items.push(action.payload);
    },
    deleteFavourites(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addFavourites, deleteFavourites } = favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;
