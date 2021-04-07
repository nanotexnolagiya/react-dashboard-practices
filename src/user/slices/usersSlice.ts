import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUser } from './userSlice';
import { Page } from '../../common/interfaces';

export interface UsersInitialState {
  isFetching: boolean;
  list: IUser[];
  error: string | null;
  page: number;
  total: number;
}

const initialState: UsersInitialState = {
  isFetching: false,
  list: [],
  error: null,
  page: 1,
  total: 10,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchRequest: (state: UsersInitialState) => ({ ...state, isFetching: true }),
    fetchSuccess: (state: UsersInitialState, { payload }: PayloadAction<Page<any>>) => ({
      ...state,
      isFetching: false,
      ...payload,
    }),
    fetchFailure: (state: UsersInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
});
