import { urls } from '../constants/urls';
import { Delivery } from '../types/deliveryType';
import { ApiResponse, apiService } from './apiService';

export const deliveryService = {
  getAll: () =>
    apiService
      .get<ApiResponse<Delivery[]>>(urls.deliveries.base)
      .then((res) => res.data),
};
