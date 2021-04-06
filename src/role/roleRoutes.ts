import { IRoute } from '../App';
import { RoleForm } from './components/RoleForm';
import { RolesPage } from './components/RolesPage';

export const roleRoutes: IRoute[] = [
  {
    path: '/roles',
    exact: true,
    component: RolesPage,
  },
  {
    path: '/roles/new',
    exact: true,
    component: RoleForm,
  },
  {
    path: '/roles/:id/edit',
    exact: true,
    component: RoleForm,
  },
];
