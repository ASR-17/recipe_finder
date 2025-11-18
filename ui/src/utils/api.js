import axios from "axios";

// MUST use env ONLY (Netlify friendly)
export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Axios instance
const API = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});

// Add token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Socket URL (same backend)
export const SOCKET_URL = import.meta.env.VITE_BACKEND_URL;

export default API;
