import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    type: '',
    ac: false,
    kitchen: false,
    bathroom: false,
    tv: false,
    transmission: '',
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setAC(state, action) {
      state.ac = action.payload;
    },
    setKitchen(state, action) {
      state.kitchen = action.payload;
    },
    setBathroom(state, action) {
      state.bathroom = action.payload;
    },
    setTV(state, action) {
      state.tv = action.payload;
    },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
  },
});

export const {
  setLocation,
  setAC,
  setKitchen,
  setTransmission,
  setType,
  setTV,
  setBathroom,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
