import React, { useState, useEffect } from 'react';
import { Chart } from 'react-chartjs-2';
import Routes from './Routes';

import ThemeContext from './context/ThemeContext';

Chart.defaults.global.legend.display = false;

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem('theme');
      return theme || 'light';
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <Routes />
    </ThemeContext.Provider>
  );
};

export default App;
