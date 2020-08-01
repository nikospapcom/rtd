import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarNav = props => {
  const { pages } = props;

  return (
    <div className="py-1">
      {props.title ? (
        <div className="pl-5 text-2xs uppercase tracking-widest font-bold">
          {props.title}
        </div>
      ) : null}
      <nav>
        {pages.map(page => (
          <NavLink
            className="flex items-center active-nav-link  py-2 pl-5 nav-item text-xs text-gray-700 tracking-wide"
            key={page.title}
            to={page.href}>
            {page.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default SidebarNav;
