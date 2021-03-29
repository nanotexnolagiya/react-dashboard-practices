import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IBaseDates } from '../../common/interfaces';

export interface IPermission extends IBaseDates {
  id?: number;
  name: string;
}

export interface PermissionInitialState {
  data: IPermission | null;
  error: string | null;
  isUpdating: boolean;
  isFetching: boolean;
}

const initialState: PermissionInitialState = {
  data: null,
  error: null,
  isUpdating: false,
  isFetching: false,
};

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    fetchRequest: (state: PermissionInitialState) => ({
      ...state,
      isFetching: true,
      data: null,
    }),
    fetchSuccess: (state: PermissionInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      error: null,
      isFetching: false,
    }),

    fetchFailure: (state: PermissionInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      error: payload,
      isFetching: false,
    }),
    createRequest: (state: PermissionInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      isUpdating: true,
    }),
    createSuccess: (state: PermissionInitialState) => ({
      ...state,
      isUpdating: false,
      error: null,
      data: null,
    }),
    createFailure: (state: PermissionInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
    updateRequest: (state: PermissionInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      isUpdating: true,
      error: null,
    }),
    updateSuccess: (state: PermissionInitialState) => ({
      ...state,
      isUpdating: false,
      data: null,
      error: null,
    }),
    updateFailure: (state: PermissionInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      error: payload,
      isUpdating: false,
    }),
    deleteRequest: (state: PermissionInitialState) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    deleteSuccess: (state: PermissionInitialState) => ({
      ...state,
      isUpdating: false,
      error: null,
    }),
    deleteFailure: (state: PermissionInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
  },
});
