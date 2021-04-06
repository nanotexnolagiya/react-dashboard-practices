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
    const res = await rolesService.create(payload);
    dispatch(roleSlice.actions.createSuccess());
    return res.data;
  } catch (error) {
    dispatch(roleSlice.actions.createFailure(error.message));
  }
};

export const updateRole = (payload: Record<string, any>) => async (dispatch: Dispatch) => {
  dispatch(roleSlice.actions.updateRequest(payload));
  try {
    const res = await rolesService.update(payload.id, payload);
    dispatch(roleSlice.actions.updateSuccess());
    return res.data;
  } catch (error) {
    dispatch(roleSlice.actions.updateFailure(error.message));
  }
};

export const deleteRole = (id: string | number) => async (dispatch: Dispatch) => {
  dispatch(roleSlice.actions.deleteRequest());
  try {
    const res = await rolesService.delete(id);
    dispatch(roleSlice.actions.deleteSuccess());
    return res.data;
  } catch (error) {
    dispatch(roleSlice.actions.deleteFailure(error.message));
  }
};
