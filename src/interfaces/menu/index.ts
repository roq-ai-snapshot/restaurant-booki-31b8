import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
