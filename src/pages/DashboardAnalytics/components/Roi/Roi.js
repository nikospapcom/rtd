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

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import ThemeContext from 'context/ThemeContext';

import themes from 'theme';

const Roi = props => {
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
              ROI Per Customer
            </Typography>
          </GridColumn>
          <GridColumn className="ml-auto">
            <Avatar>
              <AccountBalanceWalletIcon fontSize="small" />
            </Avatar>
          </GridColumn>
        </Grid>
        <Typography
          className={clsx(themes[theme].defaultTextColor)}
          gutterBottom
          variant="h3">
          $12.50
        </Typography>
        <Typography className="text-gray-600" variant="body2">
          <ArrowUpwardIcon className="text-green-500" fontSize="small" />
          <span className="text-green-500">+2.30%</span> Since last year
        </Typography>
      </CardContent>
    </Card>
  );
};

Roi.propTypes = {
  className: PropTypes.string
};

export default Roi;
