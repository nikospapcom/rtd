import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import alert from '../../../theme';
import CloseIcon from '@material-ui/icons/Close';

const Alert = props => {
  const { children, classes } = props;

  const defaultClasses = 'border rounded relative';

  return (
    <div
      className={clsx(
        defaultClasses,
        alert.variant[props.variant],
        alert.size[props.size],
        classes
      )}
      role="alert">
      {props.title ? (
        <span className="block font-semibold mb-2">{props.title}</span>
      ) : null}
      {props.subtitle ? (
        <span className="block mb-2">{props.subtitle}</span>
      ) : null}
      {props.hr ? (
        <hr className={clsx('my-2', alert.hrBg[props.variant])} />
      ) : null}
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
  children: PropTypes.string,

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
   * The Alert visual size
   *
   * @type {'sm' | 'nl' | 'xl'}
   */
  size: PropTypes.string,

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
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'}
   */
  variant: PropTypes.string
};

Alert.defaultProps = {
  dismissible: false,
  variant: 'primary',
  hr: false,
  size: 'nl',
  subtitle: null,
  title: null
};

export default Alert;
