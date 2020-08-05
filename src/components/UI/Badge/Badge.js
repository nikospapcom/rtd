import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { badge } from '../../../theme';

const Badge = props => {
  const { children, classes, isBold, pill, rounded, size, variant } = props;

  const defaultClasses = 'inline-block rounded leading-none relative';

  return (
    <div
      className={clsx(
        defaultClasses,
        badge.variant[variant],
        badge.size[size],
        pill ? badge.pill[size] : '',
        isBold ? 'font-bold' : '',
        rounded ? 'rounded-full' : '',
        classes
      )}>
      {children}
    </div>
  );
};

Badge.propTypes = {
  /**
   * The content of the AvatarGroup
   */
  children: PropTypes.string,

  /**
   * The classes coming from props
   */
  classes: PropTypes.string,

  /**
   * The Badge font weight
   */
  isBold: PropTypes.bool,

  /**
   * The Badge pill attribute
   */
  pill: PropTypes.bool,

  /**
   * The Badge rounded bool
   */
  rounded: PropTypes.bool,

  /**
   * The Alert visual size
   *
   * @type {'sm' | 'nl' | 'lg'}
   */
  size: PropTypes.oneOf(['sm', 'nl', 'lg']),

  /**
   * The Badge visual variant
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}, with 'outline' extension
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
    'light-outline'
  ])
};

Badge.defaultProps = {
  classes: null,
  isBold: false,
  pill: false,
  rounded: false,
  size: 'nl',
  variant: 'primary'
};

export default Badge;
