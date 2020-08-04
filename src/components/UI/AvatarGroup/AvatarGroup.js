import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const AvatarGroup = props => {
  const { children, classes } = props;

  return (
    <div className={clsx('flex overflow-hidden', classes)}>
      {children.slice(0, children.length).map((child, index) => {
        return React.cloneElement(child, {
          isFirst: index !== 0 ? true : false,
          grouped: true
        });
      })}
    </div>
  );
};

AvatarGroup.propTypes = {
  /**
   * The content of the AvatarGroup
   */
  children: PropTypes.node,

  /**
   * The classes coming from props
   */
  classes: PropTypes.string
};

AvatarGroup.defaultProps = {
  classes: null
};

export default AvatarGroup;
