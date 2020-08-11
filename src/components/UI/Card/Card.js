import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const Card = props => {
  const { children, className } = props;

  return (
    <div
      className={clsx(
        'rounded overflow-hidden shadow-primary bg-white',
        className
      )}>
      {children}
    </div>
  );
};

Card.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string
};

Card.defaultProps = {};

export default Card;
