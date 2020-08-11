import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SidebarNavDropdown } from './SidebarNavDropdown';

const SidebarNav = props => {
  const { pages } = props;

  return (
    <div className="mb-4">
      {props.title ? (
        <div className="pl-5 py-2 text-xs tracking-widest text-gray-700">
          {props.title}
        </div>
      ) : null}
      <nav>
        {pages.map(page => (
          <React.Fragment key={page.title}>
            {page.subpages ? (
              <SidebarNavDropdown page={page} />
            ) : (
              <NavLink
                activeClassName="text-blue-600"
                className="flex items-center active-nav-link w-full py-2 pl-5 pr-2 nav-item text-sm text-gray-700 tracking-wide"
                to={page.href}>
                {page.icon}
                {page.title}
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

SidebarNav.propTypes = {
  href: PropTypes.string,
  pages: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default SidebarNav;
