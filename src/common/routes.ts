import { IRoute } from '../App';
import { dashboardRoutes } from '../dashboard/routes';
import { permissionRoutes } from '../permissions/permissionRoutes';
import { roleRoutes } from '../role/roleRoutes';
import { userRoutes } from '../user/routes';

export const rootRoutes: IRoute[] = [
  ...dashboardRoutes,
  ...permissionRoutes,
  ...roleRoutes,
  ...userRoutes,
];
