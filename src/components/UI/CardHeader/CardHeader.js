import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const CardHeader = props => {
  const {
    action,
    avatar,
    className,
    component: Component = 'div',
    title: titleProp,
    subtitle: subtitleProp,
    ...rest
  } = props;

  const title = <div className="text-sm text-gray-800">{titleProp}</div>;

  const subtitle = <div className="text-xs text-gray-600">{subtitleProp}</div>;

  return (
    <Component
      className={clsx(
        'p-4 flex items-center border-b border-gray-300',
        className
      )}
      {...rest}>
      {avatar && <div className="flex-0-0-auto mr-4">{avatar}</div>}
      <div className="flex-auto">
        {title}
        {subtitle}
      </div>
      {action && (
        <div className="flex-0-0-auto self-start -m-t-1 -m-b-1 -m-r-2">
          {action}
        </div>
      )}
    </Component>
  );
};

CardHeader.propTypes = {
  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,

  /**
   * The Avatar for the Card Header.
   */
  avatar: PropTypes.node,

  /**
   * @ignore
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
  component: PropTypes.elementType,

  /**
   * The content of the Card Subtitle.
   */
  subtitle: PropTypes.node,

  /**
   * The content of the Card Title.
   */
  title: PropTypes.node
};

CardHeader.defaultProps = {};

export default CardHeader;
