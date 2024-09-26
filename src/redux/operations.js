import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  '/campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/campers');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getCamperById = async id => {
//   try {
//     const response = await axios.get(`/campers/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching camper by ID:', error);
//     throw error;
//   }
// };
