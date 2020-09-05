import React, { useContext } from 'react';
import { Link as LinkComponent } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import ThemeContext from 'context/ThemeContext';

import themes from 'theme';

const Link = props => {
  const {
    className,
    underline = 'hover',
    ...rest
  } = props;

  const { theme } = useContext(ThemeContext);

  let underlineClass;
  switch (underline) {
    case 'always':
      underlineClass = 'underline';
      break;
    case 'none':
      underlineClass = 'no-underline';
      break;
    default:
      underlineClass = 'hover:underline';
  }    

  return (
    <LinkComponent className={clsx(className, underlineClass, themes[theme].linkColor)} {...rest} />
  )
}

Link.propTypes = {
  /**
   * The content of the link.
   */
  children: PropTypes.node,

  /**
   * The className coming from props
   */
  className: PropTypes.string,

  /**
   * Controls when the link should have an underline.
   * @default 'hover'
   */
  underline: PropTypes.oneOf(['always', 'hover', 'none']),
}

export default Link;