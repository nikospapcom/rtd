import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDetectOutsideClick } from 'utils';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';

const SidebarNavDropdown = props => {
  const { page } = props;

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <button
        className="flex items-center active-nav-link w-full py-2 pl-5 pr-2 nav-item text-sm text-gray-700 tracking-wide outline-none"
        onClick={onClick}
        type="button">
        {page.icon && <div className="text-gray-700 mr-1">{page.icon}</div>}
        {page.title}
        <ExpandMoreIcon className="ml-auto" fontSize="small" />
      </button>
      <div className={clsx(isActive ? '' : 'hidden')}>
        {page.subpages.map(pageItem => (
          <NavLink
            activeClassName="text-blue-600"
            className="flex items-center active-nav-link w-full py-2 pl-6 pr-1 nav-item text-xs text-gray-700 tracking-wide"
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
