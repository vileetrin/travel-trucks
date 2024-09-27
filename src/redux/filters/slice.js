import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    form: '',
    filters: {
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
      transmission: '',
    },
    location: '',
  },
  reducers: {
    setFormFilter: (state, action) => {
      state.form = action.payload;
    },
    setFeatureFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    setLocationFilter: (state, action) => {
      state.location = action.payload;
    },
    resetFilters: state => {
      state.form = '';
      state.filters = {
        AC: false,
        bathroom: false,
        kitchen: false,
        TV: false,
        transmission: '',
      };
      state.location = '';
    },
  },
});

export const {
  setFormFilter,
  setFeatureFilter,
  setLocationFilter,
  resetFilters,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
