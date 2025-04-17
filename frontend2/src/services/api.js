// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend200.onrender.com/api', // ✅ Now pointing to your Render backend
});

export const getVideosByCategory = async (category) => {
  const response = await API.get(`/videos/${category}`);
  return response.data;
};
