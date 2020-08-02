import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { avatar } from '../../../theme';

const Avatar = props => {
  const { children, src, altText, size, classes, radius, variant } = props;

  console.log(props);

  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        avatar.variant[variant],
        avatar.radius[radius],
        avatar.size[size],
        classes
      )}>
      {src ? (
        <img alt={altText} className={clsx(avatar.radius[radius])} src={src} />
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  /**
   * The source of the image
   */
  altText: PropTypes.string,

  /**
   * The content of the avatar
   */
  children: PropTypes.string,

  /**
   * The classes coming from props
   */
  classes: PropTypes.string,

  /**
   * The Avatar radius
   *
   * @type {'square' | 'rounded' | 'rounded-circle'}
   */
  radius: PropTypes.string,

  /**
   * The Alert visual size
   *
   * @type {'sm' | 'nl' | 'xl'}
   */
  size: PropTypes.string,

  /**
   * The source of the image
   */
  src: PropTypes.string
};

Avatar.defaultProps = {
  altText: null,
  classes: null,
  size: 'nl',
  src: null,
  radius: 'rounded-circle',
  variant: 'primary'
};

export default Avatar;
