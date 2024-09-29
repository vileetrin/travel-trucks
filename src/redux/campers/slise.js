import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    selectedCamper: null,
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

    setFilteredCampers: (state, action) => {
      const filters = action.payload;
      state.filteredItems = state.items.filter(camper => {
        return (
          (!filters.location ||
            camper.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())) &&
          (!filters.type || camper.form === filters.type) &&
          (!filters.ac || camper.AC === filters.ac) &&
          (!filters.kitchen || camper.kitchen === filters.kitchen) &&
          (!filters.bathroom || camper.bathroom === filters.bathroom) &&
          (!filters.tv || camper.TV === filters.tv) &&
          (!filters.transmission || camper.transmission === 'automatic')
        );
      });
      state.page = 1;
      state.paginatedCampers = state.filteredItems.slice(0, state.itemsPerPage);
    },
    campersPagination: state => {
      state.currentPage += 1;
      const nextItems = state.filteredItems.slice(
        0,
        state.currentPage * state.itemsPerPage
      );
      state.paginatedCampers = nextItems;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.filteredItems = state.items;
        state.totalPages = Math.ceil(
          state.filteredItems.length / state.itemsPerPage
        );
        state.paginatedCampers = state.filteredItems.slice(
          0,
          state.itemsPerPage
        );
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setCurrentPage,
  setItemsPerPage,
  setFilteredCampers,
  campersPagination,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
