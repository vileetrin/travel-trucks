import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async (setSearchQuery, setPage) => {
  try {
    const response = await axios.get(`/campers`, {
      params: {
        query: setSearchQuery,
        page: setPage,
        per_page: 12,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export const getCamperById = async(id);
