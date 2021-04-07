import { combineReducers } from 'redux';
import { localeSlice } from './slices/localeSlice';
import { permissionSlice } from '../permissions/slices/permissionSlice';
import { permissionsSlice } from '../permissions/slices/permissionsSlice';
import { roleSlice } from '../role/slices/roleSlice';
import { rolesSlice } from '../role/slices/rolesSlice';
import { userSlice } from '../user/slices/userSlice';
import { usersSlice } from '../user/slices/usersSlice';

export const rootReducer = combineReducers({
  permission: permissionSlice.reducer,
  permissions: permissionsSlice.reducer,
  role: roleSlice.reducer,
  roles: rolesSlice.reducer,
  user: userSlice.reducer,
  users: usersSlice.reducer,
  locale: localeSlice.reducer,
});
