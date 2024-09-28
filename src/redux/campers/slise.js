import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    filteredItems: [],
    paginatedCampers: [],
    currentPage: 1,
    itemsPerPage: 4,
    totalPages: 1,
    isLoading: false,
    error: null,
  },

  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      const newCampers = state.filteredItems.slice(
        (state.currentPage - 1) * state.itemsPerPage,
        state.currentPage * state.itemsPerPage
      );
      state.paginatedCampers = [...state.paginatedCampers, ...newCampers];
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
      state.totalPages = Math.ceil(
        state.filteredItems.length / state.itemsPerPage
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.filteredItems = state.items;
        state.totalPages = Math.ceil(
          state.filteredItems.length / state.itemsPerPage
        );
        const initialCampers = state.filteredItems.slice(0, state.itemsPerPage);
        state.paginatedCampers = initialCampers;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, setItemsPerPage } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
