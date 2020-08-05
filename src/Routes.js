import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';

import { Application as ApplicationLayout } from './layouts';

import {
  Dashboard as DashboardPage,
  Alerts as AlertsPage,
  Avatars as AvatarsPage,
  Badges as BadgesPage,
  Breadcrumbs as BreadcrumbsPage
} from './pages';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={DashboardPage}
        exact
        layout={ApplicationLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={AlertsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/alerts"
      />
      <RouteWithLayout
        component={AvatarsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/avatars"
      />
      <RouteWithLayout
        component={BadgesPage}
        exact
        layout={ApplicationLayout}
        path="/ui/badges"
      />
      <RouteWithLayout
        component={BreadcrumbsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/breadcrumbs"
      />
    </Switch>
  );
};
// export default withRouter(Routes);
export default Routes;
