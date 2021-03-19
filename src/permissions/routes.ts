import { IRoute } from "../App";
import { PermissionsPage } from './components/PermissionsPage';

export const permissionRoutes: IRoute[] = [
  {
    path: '/permissions',
    exact: true,
    component: PermissionsPage
  }
]