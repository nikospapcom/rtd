import React from 'react';

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
      title: 'Accordion',
      href: '#'
    },
    {
      title: 'Alerts',
      href: '/ui/alerts'
    },
    {
      title: 'Avatars',
      href: '/ui/avatars'
    },
    {
      title: 'Badges',
      href: '/ui/badges'
    },
    {
      title: 'Breadcrumbs',
      href: '/ui/breadcrumbs'
    },
    {
      title: 'Buttons',
      href: '#'
    },
    {
      title: 'Button Groups',
      href: '#'
    }
  ];

  return (
    <aside className="relative bg-white h-screen w-64 hidden sm:block border-r">
      <SidebarHeader />
      <SidebarNav pages={dashboardPages} title="Dashboard" />
      <SidebarNav pages={webAppsPages} title="Web Apps" />
      <SidebarNav pages={UIPages} title="UI Elements" />
    </aside>
  );
};

export default Sidebar;
