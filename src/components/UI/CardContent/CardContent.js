import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const CardContent = props => {
  const { children, className, component: Component = 'div', ...rest } = props;

  return (
    <Component className={clsx('p-4', className)} {...rest}>
      {children}
    </Component>
  );
};

CardContent.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType
};

CardContent.defaultProps = {};

export default CardContent;
