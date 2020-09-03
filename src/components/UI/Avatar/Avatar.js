import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import ThemeContext from 'context/ThemeContext';

import themes from 'themes/theme';

const Avatar = props => {
  const {
    altText,
    children,
    classes,
    grouped,
    isFirst,
    radius,
    size,
    src,
    status,
    variant
  } = props;

  const { theme } = useContext(ThemeContext);

  const variantTheme = themes[theme].colors[variant];
  let variantClassess = '';
  let avatarVariants;
  if (variantTheme) {
    if(src) {
      avatarVariants = (({ text, bg }) => ({ text, bg }))(variantTheme);
    } else {
      avatarVariants = (({ text, bg, border }) => ({ text, bg, border }))(variantTheme);
    }
    variantClassess = Object.values(avatarVariants).join(' ');
  }

  return (
    <div
      className={clsx(
        'flex items-center justify-center relative',
        themes.avatar.size[size],
        themes.radius[radius],
        variantClassess,
        (!src) && 'border',
        grouped ? 'inline-block border-2 border-white' : '',
        grouped ? (isFirst ? themes.avatar.groupMargin[size] : '') : '',
        classes
      )}>
      {src ? (
        <img alt={altText} className={clsx(themes.radius[radius])} src={src} />
      ) : (
        <span>{children}</span>
      )}
      {status ? (
        <span
          className={clsx(
            'absolute border-2 rounded-full border-white',
            themes.avatar.status[status],
            themes.avatar.statusPosition[size],
          )}
        />
      ) : null}
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
  children: PropTypes.node,

  /**
   * The classes coming from props
   */
  classes: PropTypes.string,

  /**
   * Renders appropriate classes if grouped equal to true
   */
  grouped: PropTypes.bool,

  /**
   * Renders appropriate classes if avatar is not first in AvatarGroup
   */
  isFirst: PropTypes.bool,

  /**
   * The Avatar radius
   *
   * @type {'square' | 'rounded' | 'rounded-circle'}
   */
  radius: PropTypes.oneOf(['square', 'rounded', 'rounded-circle']),

  /**
   * The Alert visual size
   *
   * @type {'xs' | 'sm' | 'nl' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  size: PropTypes.oneOf(['xs', 'sm', 'nl', 'md', 'lg', 'xl', 'xxl']),

  /**
   * The source of the image
   */
  src: PropTypes.string,

  /**
   * The status of the image
   */
  status: PropTypes.oneOf(['online', 'offline']),

  /**
   * The Alert visual variant
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}, with 'outline' extension and with 'solid' extension
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'light',
    'primary-outline',
    'secondary-outline',
    'success-outline',
    'danger-outline',
    'warning-outline',
    'info-outline',
    'dark-outline',
    'light-outline',
    'primary-solid',
    'secondary-solid',
    'success-solid',
    'danger-solid',
    'warning-solid',
    'info-solid',
    'dark-solid',
    'light-solid'
  ])
};

Avatar.defaultProps = {
  altText: null,
  classes: null,
  grouped: false,
  isFirst: false,
  size: 'nl',
  src: null,
  radius: 'rounded-circle',
  status: null,
  variant: 'primary'
};

export default Avatar;
