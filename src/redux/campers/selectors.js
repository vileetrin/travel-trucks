export const selectCampersList = state => state.campers.items;

export const selectCamperDetails = state => state.campers.selectedCamper;

export const selectLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;

export const selectPaginatedCampers = state => state.campers.paginatedCampers;
export const selectTotalPages = state => state.campers.totalPages;
export const selectCurrentPage = state => state.campers.currentPage;
