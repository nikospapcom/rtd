import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Header, Sidebar } from './components';

import ThemeContext from '../../context/ThemeContext';

import themes from '../../themes/theme';

const Application = props => {
  const { theme } = useContext(ThemeContext);
  const { children } = props;

  return (
    <div className="bg-white font-body flex">
      <Sidebar />
      <div
        className={clsx(
          'w-full flex flex-col h-screen overflow-y-hidden',
          themes[theme].appBg
        )}>
        <Header />
        <div
          className={clsx(
            'w-full overflow-x-hidden border-t flex flex-col',
            themes[theme].defaultBorderColor,
            themes[theme].defaultTextColor
          )}>
          <main className="w-full flex-grow p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

Application.propTypes = {
  children: PropTypes.node
};

export default Application;
