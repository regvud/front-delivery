import { Item } from './itemType';

export type Delivery = {
  id: number;
  item: Item;
  sender: number;
  receiver: number;
  department: number;
};
