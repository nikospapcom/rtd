import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const CardFooter = props => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={clsx(
        'p-4 flex items-center border-t border-gray-300',
        className
      )}
      {...rest}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string
};

CardFooter.defaultProps = {};

export default CardFooter;
