import { IRoute } from "../App";
import { UserForm } from './components/UserForm';
import { UsersPage } from './components/UsersPage';

export const userRoutes: IRoute[] = [
  {
    path: '/users',
    childrenRoutes: [
      {
        path: '/users',
        exact: true,
        component: UsersPage
      },
      {
        path: '/users/new',
        exact: true,
        component: UserForm
      }
    ]
  }
]