import React from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';

import { RouteWithLayout } from './components';

import { Application as ApplicationLayout } from './layouts';

import { Dashboard as DashboardView, Alerts as AlertsView } from './pages';

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
    </Switch>
  );
};
// export default withRouter(Routes);
export default Routes;
