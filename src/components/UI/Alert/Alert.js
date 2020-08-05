import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { alert } from '../../../theme';

import CloseIcon from '@material-ui/icons/Close';

const Alert = props => {
  const { children, classes, variant, size } = props;

  const defaultClasses = 'border rounded relative';

  return (
    <div
      className={clsx(
        defaultClasses,
        alert.variant[variant],
        alert.size[size],
        classes,
        props.icon ? 'flex' : ''
      )}
      role="alert">
      {props.icon ? <span className="mr-2">{props.icon}</span> : null}
      {props.title ? (
        <span className="block font-semibold mb-2">{props.title}</span>
      ) : null}
      {props.subtitle ? (
        <span className="block mb-2">{props.subtitle}</span>
      ) : null}
      {props.hr ? <hr className={clsx('my-2', alert.hrBg[variant])} /> : null}
      <span className="block sm:inline">{children}</span>
      {props.dismissible ? (
        <button
          aria-label="Close"
          className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
          data-dismiss="alert"
          type="button">
          <CloseIcon fontSize="small" />
        </button>
      ) : null}
    </div>
  );
};

Alert.propTypes = {
  /**
   * The content of the alert
   */
  children: PropTypes.node,

  /**
   * The classes coming from props
   */
  classes: PropTypes.string,

  /**
   * Renders a properly aligned dismiss button, as well as
   * adding extra horizontal padding to the Alert.
   */
  dismissible: PropTypes.bool,

  /**
   * Renders an hr element
   */
  hr: PropTypes.bool,

  /**
   * Renders an hr element
   */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType
  ]),

  /**
   * The Alert visual size
   *
   * @type {'sm' | 'nl' | 'lg'}
   */
  size: PropTypes.oneOf(['sm', 'nl', 'lg']),

  /**
   * The subtitle of the alert
   */
  subtitle: PropTypes.string,

  /**
   * The title of the alert
   */
  title: PropTypes.string,

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

Alert.defaultProps = {
  classes: null,
  dismissible: false,
  hr: false,
  icon: null,
  size: 'nl',
  subtitle: null,
  title: null,
  variant: 'primary'
};

export default Alert;
