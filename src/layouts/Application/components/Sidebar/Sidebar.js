import React from 'react';

import { SidebarHeader, SidebarNav } from './components';

import TuneIcon from '@material-ui/icons/Tune';
import CardTravelIcon from '@material-ui/icons/CardTravel';

const Sidebar = () => {
  const dashboardPages = [
    {
      title: 'Dashboard',
      icon: <TuneIcon fontSize="small" />,
      subpages: [
        {
          title: 'Analytics',
          href: '/dashboard-analytics'
        },
        {
          title: 'Ecommerce',
          href: '/dashboard-ecommerce'
        }
      ]
    }
    // {
    //   title: 'Users',
    //   href: '/dashboard',
    //   icon: 'some icon'
    // },
    // {
    //   title: 'Product',
    //   href: '/dashboard',
    //   icon: 'some icon'
    // },
    // {
    //   title: 'Typography',
    //   href: '/dashboard',
    //   icon: 'some icon'
    // },
    // {
    //   title: 'Icons',
    //   href: '/dashboard',
    //   icon: 'some icon'
    // },
    // {
    //   title: 'Account',
    //   href: '/dashboard',
    //   icon: 'some icon'
    // },
    // {
    //   title: 'Settings',
    //   href: '/dashboard',
    //   icon: 'some icon'
    // }
  ];

  // const webAppsPages = [
  //   {
  //     title: 'Calendar',
  //     href: '/dashboard',
  //     icon: 'some icon'
  //   },
  //   {
  //     title: 'Chat',
  //     href: '/dashboard',
  //     icon: 'some icon'
  //   },
  //   {
  //     title: 'Contact',
  //     href: '/dashboard',
  //     icon: 'some icon'
  //   },
  //   {
  //     title: 'File Manager',
  //     href: '/dashboard',
  //     icon: 'some icon'
  //   },
  //   {
  //     title: 'Mail',
  //     href: '/dashboard',
  //     icon: 'some icon'
  //   }
  // ];

  const UIPages = [
    {
      title: 'UI Elements',
      icon: <CardTravelIcon className="w-4 h-4" />,
      subpages: [
        {
          title: 'Accordions',
          href: '/ui/accordions'
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
          href: '/ui/buttons'
        },
        {
          title: 'Cards',
          href: '/ui/cards'
        },
        {
          title: 'Dropdowns',
          href: '/ui/dropdowns'
        },
        {
          title: 'Grid System',
          href: '/ui/grid'
        },
        {
          title: 'Form Elements',
          href: '/ui/form-elements'
        },
        {
          title: 'Typography',
          href: '/ui/typography'
        }
      ]
    }
  ];

  return (
    <aside className="relative bg-white h-screen w-64 hidden sm:block border-r">
      <SidebarHeader />
      <SidebarNav pages={dashboardPages} title="Dashboard" />
      {/* <SidebarNav pages={webAppsPages} title="Web Apps" /> */}
      <SidebarNav pages={UIPages} title="Tools & Components" />
    </aside>
  );
};

export default Sidebar;
