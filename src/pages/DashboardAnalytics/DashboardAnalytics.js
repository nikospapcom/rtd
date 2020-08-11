import React from 'react';

import { Grid, GridColumn } from '../../components';

import { Sales, TotalCustomers, TotalProfit, Roi } from './components';

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
        <GridColumn w="full" wSm="1/4">
          <div className="bg-gray-600 p-2 text-center">1/4</div>
        </GridColumn>
        <GridColumn w="full" wSm="1/4">
          <div className="bg-gray-400 p-2 text-center">1/4</div>
        </GridColumn>
      </Grid>
    </>
  );
};

export default DashboardAnalytics;
