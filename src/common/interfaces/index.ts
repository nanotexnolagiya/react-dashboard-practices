export interface IBaseDates {
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface Page<T> {
  page: number;
  total: number;
  list: T[];
}
