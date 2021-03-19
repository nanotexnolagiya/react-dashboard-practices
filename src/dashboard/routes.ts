import { DashboardPage } from './components/DashboardPage';
import { IRoute } from "../App";

export const dashboardRoutes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: DashboardPage
  }
]