import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';

import { Application as ApplicationLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Alerts as AlertsView,
  Avatars as AvatarsView
} from './pages';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={ApplicationLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={AlertsView}
        exact
        layout={ApplicationLayout}
        path="/ui/alerts"
      />
      <RouteWithLayout
        component={AvatarsView}
        exact
        layout={ApplicationLayout}
        path="/ui/avatars"
      />
    </Switch>
  );
};
// export default withRouter(Routes);
export default Routes;
