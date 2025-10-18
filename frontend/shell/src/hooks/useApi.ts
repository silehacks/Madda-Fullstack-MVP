import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.dispatchEvent(new CustomEvent('auth-required'));
    }
    return Promise.reject(error);
  }
);

export const useApi = () => {
  return apiClient;
};