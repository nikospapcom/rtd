import React from 'react';
import { Link } from 'react-router-dom';

import { SidebarHeader, SidebarNav } from './components';

const Sidebar = () => {
  const dashboardPages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Users',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Product',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Typography',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Icons',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Account',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Settings',
      href: '/dashboard',
      icon: 'some icon'
    }
  ];

  const webAppsPages = [
    {
      title: 'Calendar',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Chat',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Contact',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'File Manager',
      href: '/dashboard',
      icon: 'some icon'
    },
    {
      title: 'Mail',
      href: '/dashboard',
      icon: 'some icon'
    }
  ];

  const UIPages = [
    {
      title: 'Alerts',
      href: '/ui/alerts',
      icon: 'some icon'
    }
  ];

  return (
    <aside className="relative bg-white h-screen w-64 hidden sm:block border-r">
      <SidebarHeader />
      <SidebarNav pages={dashboardPages} title="Dashboard" />
      <SidebarNav pages={webAppsPages} title="Web Apps" />
      <SidebarNav pages={UIPages} title="UI Elements" />

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
