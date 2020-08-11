import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  GridColumn,
  Card,
  CardContent,
  Avatar,
  Typography
} from '../../../../components';

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Sales = props => {
  const { className, ...rest } = props;

  return (
    <Card className={className} {...rest}>
      <CardContent>
        <Grid>
          <GridColumn>
            <Typography className="text-gray-800" variant="body2">
              Sales
            </Typography>
          </GridColumn>
          <GridColumn className="ml-auto">
            <Avatar>
              <LocalShippingIcon fontSize="small" />
            </Avatar>
          </GridColumn>
        </Grid>
        <Typography className="text-gray-800" gutterBottom variant="h3">
          $1.568
        </Typography>
        <Typography className="text-gray-600" variant="body2">
          <ArrowDownwardIcon className="text-red-500" fontSize="small" />
          <span className="text-red-500">-3.65%</span> Since last week
        </Typography>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
