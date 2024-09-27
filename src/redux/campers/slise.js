import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
import {
  selectForm,
  selectFilters,
  selectLocation,
} from '../filters/selectors';
import { selectCampersList } from './selectors';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
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
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const selectFilteredCampers = createSelector(
//   [selectCampersList, selectForm, selectFilters, selectLocation],
//   (campers, form, filters, location) => {
//     return campers.filter(camper => {
//       const matchesForm = form ? camper.form === form : true;
//       const matchesFeatures = Object.keys(filters).every(key => {
//         return filters[key] === false || camper[key] === filters[key];
//       });
//       const matchesLocation = location
//         ? camper.location.toLowerCase().includes(location.toLowerCase())
//         : true;

//       return matchesForm && matchesFeatures && matchesLocation;
//     });
//   }
// );

export const campersReducer = campersSlice.reducer;
