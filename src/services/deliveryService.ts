import { urls } from '../constants/urls';
import { Delivery, UserDeliveriesResponse } from '../types/deliveryTypes';
import { PaginatedResponse, apiService } from './apiService';

export const deliveryService = {
  getAll: () =>
    apiService
      .get<PaginatedResponse<Delivery[]>>(urls.deliveries.base)
      .then((res) => res.data),
  getUserDeliveries: () =>
    apiService
      .get<UserDeliveriesResponse>(urls.deliveries.user)
      .then((res) => res.data),
  create: (delivery: Delivery) =>
    apiService.post<Delivery>(urls.deliveries.create, delivery),
};
