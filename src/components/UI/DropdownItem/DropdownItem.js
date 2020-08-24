import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const DropdownItem = props => {
  const {
    children,
    component: Component = 'div',
    className,
    gapless,
    isHeader,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(
        'block w-full text-left text-xs',
        isHeader &&
          ' uppercase font-semibold text-gray-900 tracking-wide whitespace-no-wrap',
        gapless ? 'p-0' : 'px-1 py-2',
        className
      )}
      {...rest}>
      {children}
    </Component>
  );
};

DropdownItem.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * The component used for the button node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If true, the list has 0 padding
   */
  gapless: PropTypes.bool,

  /**
   * If true, the list item has specific header style
   */
  isHeader: PropTypes.bool
};

DropdownItem.defaultProps = {};

export default DropdownItem;
