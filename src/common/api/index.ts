import { ApiFactory } from './apiFactory';
import { ServiceFactory } from './serviceFactory';

const api = new ApiFactory({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const usersService = new ServiceFactory('/users', api.http);
export const rolesService = new ServiceFactory('/roles', api.http);
export const permissionsService = new ServiceFactory('/permissions', api.http);
