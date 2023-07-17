import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import ListIcon from '@mui/icons-material/ListSharp';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative dark:bg-dark-bg">
      <ListIcon onClick={() => toggleMenu()} />
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute z-20 w-64 mt-2 py-2 bg-white rounded-md shadow-xl dark:bg-gray-800`}
      >
        <Link
          href="/"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark:text-white dark:hover:text-white dark:hover:bg-gray-600 hover:text-white hover:bg-blue-600"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark:text-white dark:hover:text-white dark:hover:bg-gray-600 hover:text-white hover:bg-blue-600"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark:text-white dark:hover:text-white dark:hover:bg-gray-600 hover:text-white hover:bg-blue-600"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
