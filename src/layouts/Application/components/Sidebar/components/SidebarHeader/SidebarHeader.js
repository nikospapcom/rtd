import React from 'react';
import { Link } from 'react-router-dom';

const SidebarHeader = () => {
  return (
    <div className="w-full flex items-center bg-white py-1 px-4 border-b">
      <Link className="font-bold text-xl text-blue-primary my-2" to="/">
        logo
      </Link>
    </div>
  );
};

export default SidebarHeader;
