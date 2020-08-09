import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const GridColumn = props => {
  const {
    className,
    children,
    component: Component = 'div',
    spacing,
    w,
    wSm = null,
    wMd = null,
    wLg = null,
    wXl = null,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(
        `p-${spacing}`,
        w && `w-${w}`,
        wSm && `sm:w-${wSm}`,
        wMd && `md:w-${wMd}`,
        wLg && `lg:w-${wLg}`,
        wXl && `xl:w-${wXl}`,
        className
      )}
      {...rest}>
      {children}
    </Component>
  );
};

GridColumn.propTypes = {
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
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),

  /**
   * Defines the default width of `item` component.
   */
  w: PropTypes.oneOf([
    '1/2',
    '1/3',
    '2/3',
    '1/4',
    '2/4',
    '3/4',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '1/6',
    '2/6',
    '3/6',
    '4/6',
    '5/6',
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    'full'
  ]),

  /**
   * Defines the width fo lg of `item` component.
   */
  wLg: PropTypes.oneOf([
    '1/2',
    '1/3',
    '2/3',
    '1/4',
    '2/4',
    '3/4',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '1/6',
    '2/6',
    '3/6',
    '4/6',
    '5/6',
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    'full'
  ]),

  /**
   * Defines the width fo md of `item` component.
   */
  wMd: PropTypes.oneOf([
    '1/2',
    '1/3',
    '2/3',
    '1/4',
    '2/4',
    '3/4',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '1/6',
    '2/6',
    '3/6',
    '4/6',
    '5/6',
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    'full'
  ]),

  /**
   * Defines the width fo sm of `item` component.
   */
  wSm: PropTypes.oneOf([
    '1/2',
    '1/3',
    '2/3',
    '1/4',
    '2/4',
    '3/4',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '1/6',
    '2/6',
    '3/6',
    '4/6',
    '5/6',
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    'full'
  ]),

  /**
   * Defines the width fo xl of `item` component.
   */
  wXl: PropTypes.oneOf([
    '1/2',
    '1/3',
    '2/3',
    '1/4',
    '2/4',
    '3/4',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
    '1/6',
    '2/6',
    '3/6',
    '4/6',
    '5/6',
    '1/12',
    '2/12',
    '3/12',
    '4/12',
    '5/12',
    '6/12',
    '7/12',
    '8/12',
    '9/12',
    '10/12',
    '11/12',
    'full'
  ])
};

GridColumn.defaultProps = {};

export default GridColumn;
