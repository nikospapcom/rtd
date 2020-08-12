import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import ThemeContext from '../../../context/ThemeContext';

import themes from '../../../themes/theme';

const Card = props => {
  const { theme } = useContext(ThemeContext);
  const { children, className } = props;

  return (
    <div
      className={clsx(
        'rounded overflow-hidden shadow-primary',
        themes[theme].root,
        className
      )}>
      {children}
    </div>
  );
};

Card.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string
};

Card.defaultProps = {};

export default Card;
