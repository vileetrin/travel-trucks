export const selectForm = state => state.filters.form;

export const selectFilters = state => state.filters.filters;

export const selectACFilter = state => state.filters.filters.AC;
export const selectBathroomFilter = state => state.filters.filters.bathroom;
export const selectKitchenFilter = state => state.filters.filters.kitchen;
export const selectTVFilter = state => state.filters.filters.TV;
export const selectTransmissionFilter = state =>
  state.filters.filters.transmission;

export const selectLocation = state => state.filters.location;
