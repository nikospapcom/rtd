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

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import GroupIcon from '@material-ui/icons/Group';

const TotalCustomers = props => {
  const { className, ...rest } = props;

  return (
    <Card className={className} {...rest}>
      <CardContent>
        <Grid>
          <GridColumn>
            <Typography className="text-gray-800" variant="body2">
              Total Customers
            </Typography>
          </GridColumn>
          <GridColumn className="ml-auto">
            <Avatar>
              <GroupIcon fontSize="small" />
            </Avatar>
          </GridColumn>
        </Grid>
        <Typography className="text-gray-800" gutterBottom variant="h3">
          21.523
        </Typography>
        <Typography className="text-gray-600" variant="body2">
          <ArrowUpwardIcon className="text-green-500" fontSize="small" />
          <span className="text-green-500">+10%</span> Since last week
        </Typography>
      </CardContent>
    </Card>
  );
};

TotalCustomers.propTypes = {
  className: PropTypes.string
};

export default TotalCustomers;
