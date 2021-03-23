import { combineReducers } from "redux";
import { permissionSlice } from "../permissions/slices/permissionSlice";

export const rootReducer = combineReducers({
  permission: permissionSlice.reducer
})