import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IBaseDates } from '../../common/interfaces';

export interface IUser extends IBaseDates {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  role_id: number;
}

export interface UserInitialState {
  data: IUser | null;
  error: string | null;
  isUpdating: boolean;
  isFetching: boolean;
}

const initialState: UserInitialState = {
  data: null,
  error: null,
  isUpdating: false,
  isFetching: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchRequest: (state: UserInitialState) => ({
      ...state,
      isFetching: true,
      data: null,
    }),
    fetchSuccess: (state: UserInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      error: null,
      isFetching: false,
    }),

    fetchFailure: (state: UserInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      error: payload,
      isFetching: false,
    }),
    createRequest: (state: UserInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      isUpdating: true,
    }),
    createSuccess: (state: UserInitialState) => ({
      ...state,
      isUpdating: false,
      error: null,
      data: null,
    }),
    createFailure: (state: UserInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
    updateRequest: (state: UserInitialState, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      isUpdating: true,
      error: null,
    }),
    updateSuccess: (state: UserInitialState) => ({
      ...state,
      isUpdating: false,
      data: null,
      error: null,
    }),
    updateFailure: (state: UserInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      error: payload,
      isUpdating: false,
    }),
    deleteRequest: (state: UserInitialState) => ({
      ...state,
      isUpdating: true,
      error: null,
    }),
    deleteSuccess: (state: UserInitialState) => ({
      ...state,
      isUpdating: false,
      error: null,
    }),
    deleteFailure: (state: UserInitialState, { payload }: PayloadAction<string>) => ({
      ...state,
      isUpdating: false,
      error: payload,
    }),
  },
});
