import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { useDetectOutsideClick } from 'utils';

import { button } from '../../../theme';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Dropdown = props => {
  const {
    arrowActive,
    arrowInactive,
    buttonContent: buttonContentProp,
    children,
    className,
    dropUp,
    iconButton,
    hasArrow,
    component: Component = 'button',
    paddingLess,
    position,
    variant,
    size,
    ...rest
  } = props;

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

  const buttonContent = hasArrow ? (
    <span>{buttonContentProp}</span>
  ) : (
    buttonContentProp
  );

  const buttonArrow = hasArrow && (
    <span className="ml-1">
      {isActive ? (
        arrowActive ? (
          arrowActive
        ) : (
          <ExpandLessIcon />
        )
      ) : arrowInactive ? (
        arrowInactive
      ) : (
        <ExpandMoreIcon />
      )}
    </span>
  );

  return (
    <div className={clsx('relative', className)} {...rest}>
      <Component
        className={clsx(
          'transition duration-300 rounded border outline-none block',
          button.variant[variant],
          button.hoverVariant[variant],
          button.size[size],
          iconButton
            ? (paddingLess ? 'py-0 px-0' : 'py-2 px-2') +
                ' leading-none rounded-full'
            : 'py-2 px-4',
          hasArrow && 'flex item-center'
        )}
        onClick={onClick}>
        {buttonContent}
        {buttonArrow}
      </Component>

      <div
        className={clsx(
          'bg-white rounded border border-gray-300 overflow-hidden absolute text-gray-700 z-10 w-48 text-left px-1 py-1',
          isActive ? '' : 'hidden',
          dropUp ? 'bottom-full' : 'top-full',
          position === 'left' ? 'left-0' : 'right-0'
        )}
        ref={dropdownRef}>
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  /**
   * The arrow active element
   */
  arrowActive: PropTypes.any,

  /**
   * The arrow inactive element
   */
  arrowInactive: PropTypes.any,

  /**
   * The buttonContent to display in the button content
   */
  buttonContent: PropTypes.node,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * The component used for the button node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If true, the dropUp is true change the open position above button
   */
  dropUp: PropTypes.bool,

  /**
   * If true, the button has arrow down and arrow up
   */
  hasArrow: PropTypes.bool,

  /**
   * If true, the button will take equal width and height
   */
  iconButton: PropTypes.bool,

  /**
   * If true, the button will have not padding
   */
  paddingLess: PropTypes.bool,

  /**
   * The dropdown position
   *
   * @type {'left' | 'right'}
   */
  position: PropTypes.oneOf(['left', 'right']),

  /**
   * The Button visual size
   *
   * @type {'xs', 'sm' | 'nl' | 'lg'}
   */
  size: PropTypes.oneOf(['xs', 'sm', 'nl', 'lg']),

  /**
   * The Dropdown button visual variant
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

Dropdown.defaultProps = {
  size: 'nl',
  variant: 'default',
  position: 'left'
};

export default Dropdown;
