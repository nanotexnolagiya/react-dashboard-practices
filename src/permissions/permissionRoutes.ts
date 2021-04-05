import { IRoute } from '../App';
import { PermissionForm } from './components/PermissionForm';
import { PermissionsPage } from './components/PermissionsPage';

export const permissionRoutes: IRoute[] = [
  {
    path: '/permissions',
    childrenRoutes: [
      {
        path: '/permissions',
        exact: true,
        component: PermissionsPage,
      },
      {
        path: '/permissions/new',
        exact: true,
        component: PermissionForm,
      },
      {
        path: '/permissions/:id/edit',
        exact: true,
        component: PermissionForm,
      },
    ],
  },
];
