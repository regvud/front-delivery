import { urls } from '../constants/urls';
import { Delivery, UserDeliveries } from '../types/deliveryTypes';
import { PaginatedResponse, apiService } from './apiService';

export const deliveryService = {
  getAll: () =>
    apiService
      .get<PaginatedResponse<Delivery[]>>(urls.deliveries.base)
      .then((res) => res.data),
  getUserDeliveries: () =>
    apiService
      .get<UserDeliveries>(urls.deliveries.user)
      .then((res) => res.data),
};
