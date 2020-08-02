import React from 'react';

const Header = () => {
  return (
    <header className="w-full flex items-center bg-white py-2 px-4 hidden sm:flex">
      <div className="w-1/2"></div>
      <div className="relative w-1/2 flex justify-end">
        <button className="realtive z-10 w-10 h-10 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
          <img alt="" src="https://source.unsplash.com/autok_VqU9U/400x400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
