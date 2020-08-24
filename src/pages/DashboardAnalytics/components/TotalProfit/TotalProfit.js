import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import {
  Grid,
  GridColumn,
  Card,
  CardContent,
  Avatar,
  Typography
} from 'components';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import ThemeContext from 'context/ThemeContext';

import themes from 'themes/theme';

const TotalProfit = props => {
  const { className, ...rest } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <Card className={className} {...rest}>
      <CardContent>
        <Grid>
          <GridColumn>
            <Typography
              className={clsx(themes[theme].defaultTextColor)}
              variant="body2">
              Total Profit
            </Typography>
          </GridColumn>
          <GridColumn className="ml-auto">
            <Avatar>
              <AttachMoneyIcon fontSize="small" />
            </Avatar>
          </GridColumn>
        </Grid>
        <Typography
          className={clsx(themes[theme].defaultTextColor)}
          gutterBottom
          variant="h3">
          $151.958
        </Typography>
        <Typography className="text-gray-600" variant="body2">
          <ArrowDownwardIcon className="text-red-500" fontSize="small" />
          <span className="text-red-500">-3.65%</span> Since last year
        </Typography>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
