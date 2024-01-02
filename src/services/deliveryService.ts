import { urls } from '../constants/urls';
import { PaginatedResponse } from '../types/axiosTypes';
import { Delivery, UserDeliveriesResponse } from '../types/deliveryTypes';
import { apiService } from './apiService';

export const deliveryService = {
  getAll: () =>
    apiService
      .get<PaginatedResponse<Delivery[]>>(urls.deliveries.base)
      .then((res) => res.data),

  byID: (id: number) =>
    apiService.get<Delivery>(urls.deliveries.byID(id)).then((res) => res.data),
  getUserDeliveries: () =>
    apiService
      .get<UserDeliveriesResponse>(urls.deliveries.user)
      .then((res) => res.data),

  create: (delivery: Delivery) =>
    apiService.post<Delivery>(urls.deliveries.create, delivery),
};
