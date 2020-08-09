import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const Grid = props => {
  const {
    alignItems,
    className,
    children,
    component: Component = 'div',
    direction = 'row',
    justifyContent,
    spacing = 4,
    wrap = 'wrap',
    ...rest
  } = props;

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { spacing });
    }
    return child;
  });

  const getDirectionClass = direction => {
    switch (direction) {
      case 'row-reverse':
        return 'flex-row-reverse';
      case 'column':
        return 'flex-col';
      case 'column-reverse':
        return 'flex-col-reverse';
      default:
        return null;
    }
  };

  const getJustifyContentClass = justify => {
    switch (justify) {
      case 'flex-start':
        return 'justify-start';
      case 'center':
        return 'justify-center';
      case 'flex-end':
        return 'justify-end';
      case 'space-between':
        return 'justify-between';
      case 'space-around':
        return 'justify-around';
      case 'space-evenly':
        return 'justify-evenly';
      default:
        return null;
    }
  };

  const getAlignItemsClass = align => {
    switch (align) {
      case 'flex-start':
        return 'items-start';
      case 'center':
        return 'items-center';
      case 'flex-end':
        return 'items-end';
      case 'stretch':
        return 'items-stretch';
      case 'baseline':
        return 'items-baseline';
      default:
        return null;
    }
  };

  return (
    <Component
      className={clsx(
        'flex',
        `-m-${spacing}`,
        `flex-${wrap}`,
        getDirectionClass(direction),
        getJustifyContentClass(justifyContent),
        getAlignItemsClass(alignItems),
        className
      )}
      {...rest}>
      {spacing ? childrenWithProps : children}
    </Component>
  );
};

Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'space-evenly'
  ]),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: PropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch'
  ]),

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The className's of the component
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: PropTypes.oneOf([
    'column-reverse',
    'column',
    'row-reverse',
    'row'
  ]),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: PropTypes.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'space-evenly'
  ]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: PropTypes.oneOf(['no-wrap', 'wrap-reverse', 'wrap']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: PropTypes.oneOfType([
    PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ])
};

Grid.defaultProps = {};

export default Grid;
