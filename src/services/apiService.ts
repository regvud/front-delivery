import axios from 'axios';
import { baseURL } from '../constants/urls';

export type ApiResponse<T> = {
  total_pages: number;
  next: boolean;
  prev: boolean;
  results: T;
};

export const apiService = axios.create({ baseURL });
