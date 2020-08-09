import React from 'react';

import { Grid, GridColumn } from '../../../components';

const Grids = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Grid System</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic grid</div>
      <div className="p-2 bg-gray-200">
        <Grid>
          <GridColumn w="full">
            <div className="bg-gray-400 p-2 text-center">full</div>
          </GridColumn>
          <GridColumn w="1/2">
            <div className="bg-gray-600 p-2 text-center">1/2</div>
          </GridColumn>
          <GridColumn w="1/2">
            <div className="bg-gray-400 p-2 text-center">1/2</div>
          </GridColumn>
          <GridColumn w="1/4">
            <div className="bg-gray-600 p-2 text-center">1/4</div>
          </GridColumn>
          <GridColumn w="1/4">
            <div className="bg-gray-400 p-2 text-center">1/4</div>
          </GridColumn>
          <GridColumn w="1/4">
            <div className="bg-gray-600 p-2 text-center">1/4</div>
          </GridColumn>
          <GridColumn w="1/4">
            <div className="bg-gray-400 p-2 text-center">1/4</div>
          </GridColumn>
        </Grid>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Grid with breakpoints</div>
      <div className="p-2 bg-gray-200">
        <Grid>
          <GridColumn w="full">
            <div className="bg-gray-400 p-2 text-center">full</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">full - sm=1/2</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">full - sm=1/2</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/4">
            <div className="bg-gray-600 p-2 text-center">full - sm=1/4</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/4">
            <div className="bg-gray-400 p-2 text-center">full - sm=1/4</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/4">
            <div className="bg-gray-600 p-2 text-center">full - sm=1/4</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/4">
            <div className="bg-gray-400 p-2 text-center">full - sm=1/4</div>
          </GridColumn>
        </Grid>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Spacing</div>
      <div className="my-4 text-md">Spacing Default ( default = 4 )</div>
      <div className="p-2 bg-gray-200">
        <Grid>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Spacing Default</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Spacing Default</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Spacing Default</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Spacing Default</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Spacing 0</div>
      <div className="p-2 bg-gray-200">
        <Grid spacing={0}>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Spacing Default</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Spacing Default</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Spacing Default</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Spacing Default</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Spacing 2</div>
      <div className="p-2 bg-gray-200">
        <Grid spacing={2}>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Spacing 2</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Spacing 2</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Spacing 2</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Spacing 2</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Spacing 8</div>
      <div className="p-2 bg-gray-200">
        <Grid spacing={8}>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Spacing 8</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Spacing 8</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Spacing 8</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Spacing 8</div>
          </GridColumn>
        </Grid>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Direction</div>
      <div className="my-4 text-md">Row Reverse</div>
      <div className="p-2 bg-gray-200">
        <Grid direction="row-reverse">
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-600 p-2 text-center">Column 1</div>
          </GridColumn>
          <GridColumn w="full" wSm="1/2">
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Column</div>
      <div className="p-2 bg-gray-200">
        <Grid direction="column">
          <GridColumn w="full">
            <div className="bg-gray-600 p-2 text-center">Column 1</div>
          </GridColumn>
          <GridColumn w="full">
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn w="full">
            <div className="bg-gray-600 p-2 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Column Reverse</div>
      <div className="p-2 bg-gray-200">
        <Grid direction="column-reverse">
          <GridColumn w="full">
            <div className="bg-gray-600 p-2 text-center">Column 1</div>
          </GridColumn>
          <GridColumn w="full">
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn w="full">
            <div className="bg-gray-600 p-2 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Justify</div>
      <div className="my-4 text-md">Flex Start</div>
      <div className="p-2 bg-gray-200">
        <Grid justifyContent="flex-start" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Center</div>
      <div className="p-2 bg-gray-200">
        <Grid justifyContent="center" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Flex End</div>
      <div className="p-2 bg-gray-200">
        <Grid justifyContent="flex-end" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Space Between</div>
      <div className="p-2 bg-gray-200">
        <Grid justifyContent="space-between" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Space Around</div>
      <div className="p-2 bg-gray-200">
        <Grid justifyContent="space-around" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Space Evenly</div>
      <div className="p-2 bg-gray-200">
        <Grid justifyContent="space-evenly" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Align Items</div>
      <div className="my-4 text-md">Flex Start</div>
      <div className="p-2 bg-gray-200">
        <Grid alignItems="flex-start" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Center</div>
      <div className="p-2 bg-gray-200">
        <Grid alignItems="center" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Flex End</div>
      <div className="p-2 bg-gray-200">
        <Grid alignItems="flex-end" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-2 text-center">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-4 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Stretch</div>
      <div className="p-2 bg-gray-200">
        <Grid alignItems="stretch" className="h-24" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center h-full">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-1 text-center h-full">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center h-full">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
      <div className="my-4 text-md">Baseline</div>
      <div className="p-2 bg-gray-200">
        <Grid alignItems="baseline" className="h-24" spacing={1}>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center text-sm">Column 1</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-400 p-1 text-center text-2xl">Column 2</div>
          </GridColumn>
          <GridColumn>
            <div className="bg-gray-600 p-1 text-center">Column 3</div>
          </GridColumn>
        </Grid>
      </div>
    </div>
  );
};

export default Grids;
