import { Item } from './itemTypes';

export type Delivery = {
  id: number;
  item: Item;
  sender: number;
  receiver: number;
  department: number;
};

export type UserDeliveries = {
  sending: Delivery[];
  receiving: Delivery[];
};
