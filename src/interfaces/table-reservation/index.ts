import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TableReservationInterface {
  id?: string;
  table_number: number;
  reservation_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TableReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
