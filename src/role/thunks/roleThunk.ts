import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { roleSlice } from '../slices/roleSlice';
import { rolesService } from '../../common/api';
import { rolesSlice } from '../slices/rolesSlice';

export const fetchRole = (id: string, config?: AxiosRequestConfig) => async (
  dispatch: Dispatch
) => {
  dispatch(roleSlice.actions.fetchRequest());
  try {
    const res = await rolesService.fetchOne(id, config);
    dispatch(roleSlice.actions.fetchSuccess(res.data.data));
  } catch (error) {
    dispatch(roleSlice.actions.fetchFailure(error.message));
  }
};

export const fetchRoles = (config?: AxiosRequestConfig) => async (dispatch: Dispatch) => {
  dispatch(rolesSlice.actions.fetchRequest());
  try {
    const res = await rolesService.fetchMany(config);
    dispatch(rolesSlice.actions.fetchSuccess({ list: res.data.data } as any));
  } catch (error) {
    dispatch(rolesSlice.actions.fetchFailure(error.message));
  }
};

export const createRole = (payload: Record<string, any>, config?: AxiosRequestConfig) => async (
  dispatch: Dispatch
) => {
  dispatch(roleSlice.actions.createRequest(payload));
  try {
    await rolesService.create(payload);
    dispatch(roleSlice.actions.createSuccess());
  } catch (error) {
    dispatch(roleSlice.actions.createFailure(error.message));
  }
};
