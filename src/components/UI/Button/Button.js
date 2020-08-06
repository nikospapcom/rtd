import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { button } from '../../../theme';

const Button = props => {
  const {
    children,
    className,
    component,
    disabled,
    fullWidth,
    href,
    iconButton,
    rounded,
    size,
    type,
    startIcon: startIconProp,
    endIcon: endIconProp,
    variant,
    ...rest
  } = props;

  let ComponentProp = component;

  if (ComponentProp === 'button' && href) {
    ComponentProp = 'a';
  }

  const buttonProps = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !href) {
      buttonProps.role = 'button';
    }
    buttonProps['aria-disabled'] = disabled;
    buttonProps['href'] = href;
  }

  // console.log(props);
  console.log(rest);

  const startIcon = startIconProp && (
    <span className="mr-1 leading-none">{startIconProp}</span>
  );
  const endIcon = endIconProp && (
    <span className="ml-1 leading-none">{endIconProp}</span>
  );
  const content =
    startIconProp || endIconProp ? <span>{children}</span> : children;

  return (
    <ComponentProp
      className={clsx(
        'transition duration-300 rounded border',
        button.variant[variant],
        button.size[size],
        fullWidth ? 'block w-full' : null,
        disabled
          ? 'opacity-75 cursor-not-allowed'
          : button.hoverVariant[variant],
        rounded ? 'rounded-full' : '',
        iconButton ? 'py-2 px-2 leading-none rounded-full' : 'py-2 px-4',
        startIcon || endIcon ? 'inline-flex items-center' : null,
        className
      )}
      {...rest}
      {...buttonProps}>
      {startIcon}
      {content}
      {endIcon}
    </ComponentProp>
  );
};

Button.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType
  ]),

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
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Element placed after the children.
   */
  endIcon: PropTypes.node,

  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,

  /**
   * If true, the button will take equal width and height
   */
  iconButton: PropTypes.bool,

  /**
   * The Button rounded bool
   */
  rounded: PropTypes.bool,

  /**
   * The Button visual size
   *
   * @type {'xs', 'sm' | 'nl' | 'lg'}
   */
  size: PropTypes.oneOf(['xs', 'sm', 'nl', 'lg']),

  /**
   * Element placed before the children.
   */
  startIcon: PropTypes.node,

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
   * @type {'default' | 'black' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}, with 'outline' extension and with 'solid' extension
   */
  variant: PropTypes.oneOf([
    'default',
    'black',
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
  component: 'button',
  fullWidth: false,
  disabled: false,
  size: 'nl',
  variant: 'default'
};

export default Button;
