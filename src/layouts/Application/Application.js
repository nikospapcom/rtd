import React from 'react';
import PropTypes from 'prop-types';

const Application = props => {
  const { children } = props;

  return (
    <div className="Applicatiin">
      <div>Topbar</div>
      <div>Sidebar</div>
      <main>{children}</main>
    </div>
  );
};

Application.propTypes = {
  children: PropTypes.node
};

export default Application;
