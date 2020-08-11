import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';

import { Application as ApplicationLayout } from './layouts';

import {
  DashboardAnalytics as DashboardAnalyticsPage,
  Accordions as AccordionsPage,
  Alerts as AlertsPage,
  Avatars as AvatarsPage,
  Badges as BadgesPage,
  Breadcrumbs as BreadcrumbsPage,
  Buttons as ButtonsPage,
  Cards as CardsPage,
  Dropdowns as DropdownsPage,
  Grids as GridsPage,
  FormElements as FormElementsPage,
  Typography as TypographyPage
} from './pages';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard-analytics" />
      <RouteWithLayout
        component={DashboardAnalyticsPage}
        exact
        layout={ApplicationLayout}
        path="/dashboard-analytics"
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
      <RouteWithLayout
        component={CardsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/cards"
      />
      <RouteWithLayout
        component={DropdownsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/dropdowns"
      />
      <RouteWithLayout
        component={GridsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/grid"
      />
      <RouteWithLayout
        component={FormElementsPage}
        exact
        layout={ApplicationLayout}
        path="/ui/form-elements"
      />
      <RouteWithLayout
        component={TypographyPage}
        exact
        layout={ApplicationLayout}
        path="/ui/typography"
      />
    </Switch>
  );
};

export default Routes;
