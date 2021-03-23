import { Dispatch } from "redux";
import { permissionSlice } from "../slices/permissionSlice";

export const fetchPermission = (id: string) => async (dispatch: Dispatch) => {
  dispatch(permissionSlice.actions.fetchRequest());
  try {
    const category = await Promise.resolve({id});
    dispatch(permissionSlice.actions.fetchSuccess(category));
  } catch (error) {
    dispatch(permissionSlice.actions.fetchFailure(error.message));
  }
};