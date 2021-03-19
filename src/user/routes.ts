import { IRoute } from "../App";
import { UsersPage } from './components/UsersPage';

export const userRoutes: IRoute[] = [
  {
    path: '/users',
    exact: true,
    component: UsersPage
  }
]