import React from 'react';

import { Grid, GridColumn, Card, CardContent } from '../../../components';

const Grids = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl">Grid System</div>
      <hr className="my-8" />
      <div className="my-6 text-xl">Basic grid</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <hr className="my-8" />
      <div className="my-6 text-xl">Grid with breakpoints</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <hr className="my-8" />
      <div className="my-6 text-xl">Spacing</div>
      <div className="my-4 text-md">Spacing Default ( default = 4 )</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Spacing 0</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Spacing 2</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Spacing 8</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <hr className="my-8" />
      <div className="my-6 text-xl">Direction</div>
      <div className="my-4 text-md">Row Reverse</div>
      <Card>
        <CardContent>
          <Grid direction="row-reverse">
            <GridColumn w="full" wSm="1/2">
              <div className="bg-gray-600 p-2 text-center">Column 1</div>
            </GridColumn>
            <GridColumn w="full" wSm="1/2">
              <div className="bg-gray-400 p-2 text-center">Column 2</div>
            </GridColumn>
          </Grid>
        </CardContent>
      </Card>
      <div className="my-4 text-md">Column</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Column Reverse</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <hr className="my-8" />
      <div className="my-6 text-xl">Justify</div>
      <div className="my-4 text-md">Flex Start</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Center</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Flex End</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Space Between</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Space Around</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Space Evenly</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <hr className="my-8" />
      <div className="my-6 text-xl">Align Items</div>
      <div className="my-4 text-md">Flex Start</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Center</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Flex End</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Stretch</div>
      <Card>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="my-4 text-md">Baseline</div>
      <Card>
        <CardContent>
          <Grid alignItems="baseline" className="h-24" spacing={1}>
            <GridColumn>
              <div className="bg-gray-600 p-1 text-center text-sm">
                Column 1
              </div>
            </GridColumn>
            <GridColumn>
              <div className="bg-gray-400 p-1 text-center text-2xl">
                Column 2
              </div>
            </GridColumn>
            <GridColumn>
              <div className="bg-gray-600 p-1 text-center">Column 3</div>
            </GridColumn>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Grids;
