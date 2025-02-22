import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { typography } from '../../../theme';

const Typography = props => {
  const {
    align,
    children,
    className,
    component: Component = 'div',
    display,
    gutterBottom,
    noWrap,
    variant,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(
        align && `text-${align}`,
        className,
        display !== 'initial' && display,
        gutterBottom && 'mb-4',
        noWrap && 'truncate',
        typography.variant[variant]
      )}
      {...rest}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  /**
   * The align of the typography
   */
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),

  /**
   * The content of the typography
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * The component element type
   */
  component: PropTypes.elementType,

  /**
   * The align of the typography
   */
  display: PropTypes.oneOf(['initial', 'block', 'inline-block', 'inline']),

  /**
   * If true, the typography will have margin bottom
   */
  gutterBottom: PropTypes.bool,

  /**
   * If true, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,

  /**
   * The variant of the typography
   */
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2'
  ])
};

export default Typography;
