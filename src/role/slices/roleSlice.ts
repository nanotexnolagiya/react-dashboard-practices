import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IBaseDates } from '../../common/interfaces';

export interface IRole extends IBaseDates {
  id?: number;
  name: string;
  permission_id: number;
}

export interface RoleInitialState {
  data: IRole | null;
  error: string | null;
  isUpdating: boolean;
  isFetching: boolean;
}

const initialState: RoleInitialState = {
  data: null,
  error: null,
  isUpdating: false,
  isFetching: false,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    fetchRequest: (state: RoleInitialState) => ({
      ...state,
      isFetching: true,
      data: null,
    }),
    fetchSuccess: (state: RoleInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      error: null,
      isFetching: false,
    }),

    fetchFailure: (state: RoleInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      error: payload,
      isFetching: false,
    }),
    createRequest: (state: RoleInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      isUpdating: true,
    }),
    createSuccess: (state: RoleInitialState) => ({
      ...state,
      isUpdating: false,
      error: null,
      data: null,
    }),
    createFailure: (state: RoleInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
    updateRequest: (state: RoleInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      isUpdating: true,
      error: null,
    }),
    updateSuccess: (state: RoleInitialState) => ({
      ...state,
      isUpdating: false,
      data: null,
      error: null,
    }),
    updateFailure: (state: RoleInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      error: payload,
      isUpdating: false,
    }),
    deleteRequest: (state: RoleInitialState) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    deleteSuccess: (state: RoleInitialState) => ({
      ...state,
      isUpdating: false,
      error: null,
    }),
    deleteFailure: (state: RoleInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
  },
});
