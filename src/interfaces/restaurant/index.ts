import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  name: string;
  location: string;
  capacity: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  user_id?: string;
}
