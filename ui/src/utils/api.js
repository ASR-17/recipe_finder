import axios from "axios";

// MUST use env ONLY (no fallback to localhost)
const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Socket URL also MUST use env ONLY
export const SOCKET_URL = import.meta.env.VITE_BACKEND_URL;

export default API;
