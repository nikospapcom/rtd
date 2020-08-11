import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import Routes from './Routes';

Chart.defaults.global.legend.display = false;

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
