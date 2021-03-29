import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IPermission } from './permissionSlice';
import { Page } from '../../common/interfaces';

export interface PermissionsInitialState {
  isFetching: boolean;
  list: IPermission[];
  error: string | null;
  page: number;
  total: number;
}

const initialState: PermissionsInitialState = {
  isFetching: false,
  list: [],
  error: null,
  page: 1,
  total: 10,
};

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    fetchRequest: (state: PermissionsInitialState) => ({ ...state, isFetching: true }),
    fetchSuccess: (state: PermissionsInitialState, { payload }: PayloadAction<Page<any>>) => ({
      ...state,
      isFetching: false,
      ...payload,
    }),
    fetchFailure: (state: PermissionsInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
});
