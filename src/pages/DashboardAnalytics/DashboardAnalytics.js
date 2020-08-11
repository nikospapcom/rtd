import React from 'react';

import { Grid, GridColumn } from '../../components';

import {
  Sales,
  TotalCustomers,
  TotalProfit,
  Roi,
  RecentMovement
} from './components';

const DashboardAnalytics = () => {
  return (
    <>
      <Grid>
        <GridColumn>
          <div className="text-xl">
            <span className="font-semibold">Analytics</span> Dashboard
          </div>
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn w="full" wSm="1/4">
          <Grid direction="column">
            <GridColumn>
              <Sales />
            </GridColumn>
            <GridColumn>
              <TotalProfit />
            </GridColumn>
          </Grid>
        </GridColumn>
        <GridColumn w="full" wSm="1/4">
          <Grid direction="column">
            <GridColumn>
              <TotalCustomers />
            </GridColumn>
            <GridColumn>
              <Roi />
            </GridColumn>
          </Grid>
        </GridColumn>
        <GridColumn w="full" wSm="1/2">
          <RecentMovement />
        </GridColumn>
      </Grid>
    </>
  );
};

export default DashboardAnalytics;
