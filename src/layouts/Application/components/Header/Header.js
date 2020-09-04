import React, { useContext } from 'react';
import clsx from 'clsx';

import ThemeContext from 'context/ThemeContext';

import themes from 'theme';

import { Avatar, Button, Dropdown, DropdownItem } from 'components';

import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header
      className={clsx(
        'w-full flex items-center py-2 px-4 sm:flex',
        themes[theme].root
      )}>
      <div className="w-1/2"></div>
      <div className="relative w-1/2 flex justify-end">
        {/* <button className="realtive z-10 w-10 h-10 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
          <img alt="" src="https://source.unsplash.com/autok_VqU9U/400x400" />
        </button> */}
        <Button
          className="mr-2"
          iconButton
          onClick={handleThemeToggle}
          variant="primary-solid">
          <WbSunnyIcon />
        </Button>
        <Dropdown
          buttonContent={
            <Avatar
              altText="This is altText"
              src="https://source.unsplash.com/autok_VqU9U/400x400"
            />
          }
          iconButton
          paddingLess
          position="right">
          <DropdownItem gapless>
            <Button component="a" fullWidth href="/" size="sm">
              Profile
            </Button>
          </DropdownItem>
          <DropdownItem gapless>
            <Button component="a" fullWidth href="/" size="sm">
              Account
            </Button>
          </DropdownItem>
          <DropdownItem gapless>
            <Button component="a" fullWidth href="/" size="sm">
              Logout
            </Button>
          </DropdownItem>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
