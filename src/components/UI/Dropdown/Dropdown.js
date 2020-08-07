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
    iconButton,
    hasArrow,
    component: Component = 'button',
    paddingLess,
    variant,
    size,
    ...rest
  } = props;

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

  // console.log(buttonContent);

  // const buttonComponent = <ButtonComponent onClick={onClick} />;

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
    <div className="relative" {...rest}>
      <Component
        className={clsx(
          'transition duration-300 rounded border outline-none',
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
        className={`bg-white shadow rounded border overflow-hidden absolute text-gray-700 pt-1 ${
          isActive ? '' : 'hidden'
        }`}
        ref={dropdownRef}>
        <span>item 1</span>
        <span>item 2</span>
        <span>item 3</span>
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
  variant: 'default'
};

export default Dropdown;
