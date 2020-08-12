import React, { useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ThemeContext from 'context/ThemeContext';

import themes from 'themes/theme';

import { useDetectOutsideClick } from 'utils';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const SidebarNavDropdown = props => {
  const { theme } = useContext(ThemeContext);
  const { page } = props;

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <button
        className={clsx(
          'flex items-center active-nav-link w-full py-2 pl-5 pr-2 nav-item text-sm tracking-wide outline-none',
          themes[theme].sidebar.linkColor
        )}
        onClick={onClick}
        type="button">
        {page.icon && <div className="text-current mr-1">{page.icon}</div>}
        {page.title}
        <ExpandMoreIcon className="ml-auto" fontSize="small" />
      </button>
      <div className={clsx(isActive ? '' : 'hidden')}>
        {page.subpages.map(pageItem => (
          <NavLink
            activeClassName={clsx(themes[theme].sidebar.linkColorActive)}
            className={clsx(
              'flex items-center active-nav-link w-full py-2 pl-6 pr-1 nav-item text-xs tracking-wide',
              themes[theme].sidebar.linkColor
            )}
            key={pageItem.title}
            to={pageItem.href}>
            <ArrowForwardIcon className="text-current mr-1 w-4 h-4" />
            {pageItem.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

SidebarNavDropdown.propTypes = {
  page: PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string,
    subpages: PropTypes.array.isRequired,
    icon: PropTypes.node
  })
};

export default SidebarNavDropdown;
