import './App.css';

import { ComponentType, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'

import { BaseLayout } from './common/layouts/BaseLayout';
import { rootRoutes } from './common/routes';

export interface IRoute {
  path: string
  component?: ComponentType<any>
  exact?: boolean
  to?: string
  childrenRoutes?: IRoute[]
}

const renderRoute = (routes: IRoute[]) => {
  return routes.map((route: IRoute) => {
    if (route?.childrenRoutes?.length) {
      return (
        <Switch>
          {
            renderRoute(route.childrenRoutes)
          }
        </Switch>
      )
    } else {
      return (
        <Route {...route} />
      )
    }
  })
}

function App() {
  return (
    <BaseLayout>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {
          renderRoute(rootRoutes)
        }
      </Switch>
      </Suspense>
    </BaseLayout>
  );
}

export default App;
