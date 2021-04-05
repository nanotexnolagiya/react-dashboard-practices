import { combineReducers } from 'redux';
import { localeSlice } from './slices/localeSlice';
import { permissionSlice } from '../permissions/slices/permissionSlice';
import { permissionsSlice } from '../permissions/slices/permissionsSlice';
import { roleSlice } from '../role/slices/roleSlice';
import { rolesSlice } from '../role/slices/rolesSlice';

export const rootReducer = combineReducers({
  permission: permissionSlice.reducer,
  permissions: permissionsSlice.reducer,
  role: roleSlice.reducer,
  roles: rolesSlice.reducer,
  locale: localeSlice.reducer,
});
