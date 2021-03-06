import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { permissionSlice } from '../slices/permissionSlice';
import { permissionsService } from '../../common/api';
import { permissionsSlice } from '../slices/permissionsSlice';

export const fetchPermission = (id: string, config?: AxiosRequestConfig) => async (
  dispatch: Dispatch
) => {
  dispatch(permissionSlice.actions.fetchRequest());
  try {
    const res = await permissionsService.fetchOne(id, config);
    dispatch(permissionSlice.actions.fetchSuccess(res.data.data));
  } catch (error) {
    dispatch(permissionSlice.actions.fetchFailure(error.message));
  }
};

export const fetchPermissions = (config?: AxiosRequestConfig) => async (dispatch: Dispatch) => {
  dispatch(permissionsSlice.actions.fetchRequest());
  try {
    const res = await permissionsService.fetchMany(config);
    dispatch(permissionsSlice.actions.fetchSuccess({ list: res.data.data } as any));
  } catch (error) {
    dispatch(permissionsSlice.actions.fetchFailure(error.message));
  }
};

export const createPermission = (
  payload: Record<string, any>,
  config?: AxiosRequestConfig
) => async (dispatch: Dispatch) => {
  dispatch(permissionSlice.actions.createRequest(payload));
  try {
    const res = await permissionsService.create(payload);
    dispatch(permissionSlice.actions.createSuccess());
    return res.data;
  } catch (error) {
    dispatch(permissionSlice.actions.createFailure(error.message));
  }
};

export const updatePermission = (payload: Record<string, any>) => async (dispatch: Dispatch) => {
  dispatch(permissionSlice.actions.updateRequest(payload));
  try {
    const res = await permissionsService.update(payload.id, payload);
    dispatch(permissionSlice.actions.updateSuccess());
    return res.data;
  } catch (error) {
    dispatch(permissionSlice.actions.updateFailure(error.message));
  }
};

export const deletePermission = (id: string | number) => async (dispatch: Dispatch) => {
  dispatch(permissionSlice.actions.deleteRequest());
  try {
    const res = await permissionsService.delete(id);
    dispatch(permissionSlice.actions.deleteSuccess());
    return res.data;
  } catch (error) {
    dispatch(permissionSlice.actions.deleteFailure(error.message));
  }
};
