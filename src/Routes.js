import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';

import { Application as ApplicationLayout } from './layouts';

import {
  Dashboard as DashboardPage,
  Accordions as AccordionsPage,
  Alerts as AlertsPage,
  Avatars as AvatarsPage,
  Badges as BadgesPage,
  Breadcrumbs as BreadcrumbsPage,
  Buttons as ButtonsPage
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
        component={AccordionsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/accordions"
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
      <RouteWithLayout
        component={ButtonsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/buttons"
      />
    </Switch>
  );
};
// export default withRouter(Routes);
export default Routes;
