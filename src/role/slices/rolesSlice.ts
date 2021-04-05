import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IRole } from './roleSlice';
import { Page } from '../../common/interfaces';

export interface RolesInitialState {
  isFetching: boolean;
  list: IRole[];
  error: string | null;
  page: number;
  total: number;
}

const initialState: RolesInitialState = {
  isFetching: false,
  list: [],
  error: null,
  page: 1,
  total: 10,
};

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    fetchRequest: (state: RolesInitialState) => ({ ...state, isFetching: true }),
    fetchSuccess: (state: RolesInitialState, { payload }: PayloadAction<Page<any>>) => ({
      ...state,
      isFetching: false,
      ...payload,
    }),
    fetchFailure: (state: RolesInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isFetching: false,
      error: payload,
    }),
  },
});
