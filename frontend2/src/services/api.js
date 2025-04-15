// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust if your backend is hosted elsewhere
});

export const getVideosByCategory = async (category) => {
  const response = await API.get(`/videos/${category}`);
  return response.data;
};
