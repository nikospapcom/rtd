import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="relative bg-white h-screen w-64 hidden sm:block border-r">
      <div className="p-6">
        <a
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          href="index.html">
          Admin
        </a>
        <button className="font-body w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i className="fas fa-plus mr-3" /> New Report
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <a
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
          href="index.html">
          <i className="fas fa-tachometer-alt mr-3" />
          Dashboard
        </a>
      </nav>
      <a
        className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
        href="#">
        <i className="fas fa-arrow-circle-up mr-3" />
        Upgrade to Pro!
      </a>
    </aside>
  );
};

export default Sidebar;
