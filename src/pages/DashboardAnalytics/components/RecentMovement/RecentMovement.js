import React from 'react';
import PropTypes from 'prop-types';

import { Line } from 'react-chartjs-2';

import {
  Button,
  Dropdown,
  DropdownItem,
  Card,
  CardHeader,
  CardContent
} from '../../../../components';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      pointBorderColor: '#ffffff',
      pointBackgroundColor: '#5a67d8',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#5a67d8',
      pointHoverBorderWidth: 2,
      pointHoverRadius: 6,
      borderWidth: 4,
      borderColor: '#5a67d8',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      backgroundColor: '#c3dafe',
      data: [65, 59, 66, 63, 56, 55, 60],
      steppedLine: false
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    text: 'Chart.js Line Chart - Stacked Area'
  },
  hover: {
    mode: 'index'
  },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    titleFontColor: '#2d3748',
    bodyFontColor: '#2d3748',
    footerFontColor: '#2d3748'
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  }
};

const RecentMovement = props => {
  const { className, ...rest } = props;

  const cardDropdown = (
    <Dropdown
      buttonContent={<MoreVertIcon fontSize="small" />}
      iconButton
      position="right">
      <DropdownItem gapless>
        <Button component="a" fullWidth href="#" size="sm">
          Action
        </Button>
      </DropdownItem>
      <DropdownItem gapless>
        <Button component="a" fullWidth href="#" size="sm">
          Another Action
        </Button>
      </DropdownItem>
    </Dropdown>
  );

  return (
    <Card className={className} {...rest}>
      <CardHeader action={cardDropdown} title="Recent Movement" />
      <CardContent>
        <div style={{ height: '238px' }}>
          <Line data={data} id="chartjs-dashboard-line" options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

RecentMovement.propTypes = {
  className: PropTypes.string
};

export default RecentMovement;
