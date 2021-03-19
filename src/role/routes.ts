import { IRoute } from "../App";
import { RolesPage } from './components/RolesPage';

export const roleRoutes: IRoute[] = [
  {
    path: '/roles',
    exact: true,
    component: RolesPage
  }
]