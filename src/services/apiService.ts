import axios from 'axios';
import { baseURL } from '../constants/urls';

export type PaginatedResponse<T> = {
  total_pages: number;
  next: boolean;
  prev: boolean;
  results: T;
};

export const apiService = axios.create({ baseURL });

apiService.interceptors.request.use((req) => {
  const access = localStorage.getItem('access');

  if (access) {
    req.headers.Authorization = `Bearer ${access}`;
  }

  return req;
});
