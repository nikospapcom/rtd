import React from 'react';
import PropTypes from 'prop-types';

import { Header, Sidebar } from './components';

const Application = props => {
  const { children } = props;

  return (
    <div className="bg-white font-body flex">
      <Sidebar />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <Header />
        {/* <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6 ">Dashboard</h1>
          </main>
        </div> */}
        <div className="w-full overflow-x-hidden border-t flex flex-col">
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
