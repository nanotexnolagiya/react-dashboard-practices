import { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { userSlice } from '../slices/userSlice';
import { usersService } from '../../common/api';
import { usersSlice } from '../slices/usersSlice';

export const fetchUser = (id: string, config?: AxiosRequestConfig) => async (
  dispatch: Dispatch
) => {
  dispatch(userSlice.actions.fetchRequest());
  try {
    const res = await usersService.fetchOne(id, config);
    dispatch(userSlice.actions.fetchSuccess(res.data.data));
  } catch (error) {
    dispatch(userSlice.actions.fetchFailure(error.message));
  }
};

export const fetchUsers = (config?: AxiosRequestConfig) => async (dispatch: Dispatch) => {
  dispatch(usersSlice.actions.fetchRequest());
  try {
    const res = await usersService.fetchMany(config);
    dispatch(usersSlice.actions.fetchSuccess({ list: res.data.data } as any));
  } catch (error) {
    dispatch(usersSlice.actions.fetchFailure(error.message));
  }
};

export const createUser = (payload: Record<string, any>, config?: AxiosRequestConfig) => async (
  dispatch: Dispatch
) => {
  dispatch(userSlice.actions.createRequest(payload));
  try {
    const res = await usersService.create(payload);
    dispatch(userSlice.actions.createSuccess());
    return res.data;
  } catch (error) {
    dispatch(userSlice.actions.createFailure(error.message));
  }
};

export const updateUser = (payload: Record<string, any>) => async (dispatch: Dispatch) => {
  dispatch(userSlice.actions.updateRequest(payload));
  try {
    const res = await usersService.update(payload.id, payload);
    dispatch(userSlice.actions.updateSuccess());
    return res.data;
  } catch (error) {
    dispatch(userSlice.actions.updateFailure(error.message));
  }
};

export const deleteUser = (id: string | number) => async (dispatch: Dispatch) => {
  dispatch(userSlice.actions.deleteRequest());
  try {
    const res = await usersService.delete(id);
    dispatch(userSlice.actions.deleteSuccess());
    return res.data;
  } catch (error) {
    dispatch(userSlice.actions.deleteFailure(error.message));
  }
};
