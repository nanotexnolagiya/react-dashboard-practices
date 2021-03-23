import { combineReducers } from 'redux';
import { localeSlice } from './slices/localeSlice';
import { permissionSlice } from '../permissions/slices/permissionSlice';

export const rootReducer = combineReducers({
  permission: permissionSlice.reducer,
  locale: localeSlice.reducer,
});
