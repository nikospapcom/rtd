import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import theme from '../../../theme';
import alert from '../../../theme';

const Alert = props => {
  const { children, classes } = props;

  console.log(props);
  console.log('alert');
  // console.log(theme['alert'].variant[props.variant]);
  console.log(alert.variant[props.variant]);

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
      <span className="block sm:inline">{children}</span>
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
   * The Alert visual size
   *
   * @type {'sm' | 'nl' | 'xl'}
   */
  size: PropTypes.string,

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
  size: 'nl'
};

export default Alert;
