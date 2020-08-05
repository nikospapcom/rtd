import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { button } from '../../../theme';

const Button = props => {
  const {
    children,
    className,
    disabled,
    fullWidth,
    size,
    variant,
    ...rest
  } = props;

  return (
    <button
      className={clsx(
        'transition duration-300 py-2 px-4 rounded border',
        button.variant[variant],
        button.size[size],
        fullWidth ? 'block w-full' : null,
        disabled
          ? 'opacity-75 cursor-not-allowed'
          : button.hoverVariant[variant],
        className
      )}
      {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.string,

  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The Button visual size
   *
   * @type {'sm' | 'nl' | 'lg'}
   */
  size: PropTypes.oneOf(['xs', 'sm', 'nl', 'lg']),

  /**
   * Type of Buttons
   */
  type: PropTypes.oneOfType([
    PropTypes.oneOf(['button', 'reset', 'submit']),
    PropTypes.string
  ]),

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

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: 'nl',
  variant: 'primary'
};

export default Button;
