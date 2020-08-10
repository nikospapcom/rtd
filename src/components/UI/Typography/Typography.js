import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const Typography = props => {
  const {
    align,
    children,
    className,
    component: Component = 'div',
    display,
    gutterBottom,
    noWrap,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(
        align && `text-${align}`,
        className,
        display !== 'initial' && display,
        gutterBottom && 'mb-1',
        noWrap && 'truncate'
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
  noWrap: PropTypes.bool
};

export default Typography;
