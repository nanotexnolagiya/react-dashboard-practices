import { combineReducers } from 'redux';
import { localeSlice } from './slices/localeSlice';
import { permissionSlice } from '../permissions/slices/permissionSlice';
import { permissionsSlice } from '../permissions/slices/permissionsSlice';

export const rootReducer = combineReducers({
  permission: permissionSlice.reducer,
  permissions: permissionsSlice.reducer,
  locale: localeSlice.reducer,
});
