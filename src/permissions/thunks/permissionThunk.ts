import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { permissionSlice } from '../slices/permissionSlice';
import { permissionsService } from '../../common/api';

export const fetchPermission = (id: string, config?: AxiosRequestConfig) => async (
  dispatch: Dispatch
) => {
  dispatch(permissionSlice.actions.fetchRequest());
  try {
    const category = await permissionsService.fetchOne(id, config);
    dispatch(permissionSlice.actions.fetchSuccess(category));
  } catch (error) {
    dispatch(permissionSlice.actions.fetchFailure(error.message));
  }
};

export const fetchPermissions = (config?: AxiosRequestConfig) => async (dispatch: Dispatch) => {
  dispatch(permissionSlice.actions.fetchRequest());
  try {
    const category = await permissionsService.fetchMany(config);
    dispatch(permissionSlice.actions.fetchSuccess(category));
  } catch (error) {
    dispatch(permissionSlice.actions.fetchFailure(error.message));
  }
};
