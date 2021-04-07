import { IRoute } from '../App';
import { dashboardRoutes } from '../dashboard/routes';
import { permissionRoutes } from '../permissions/permissionRoutes';
import { roleRoutes } from '../role/roleRoutes';
import { userRoutes } from '../user/userRoutes';

export const rootRoutes: IRoute[] = [
  ...dashboardRoutes,
  ...permissionRoutes,
  ...roleRoutes,
  ...userRoutes,
];
