import React from 'react';
import { Link } from '@inertiajs/react';

interface Props {
  route: string;
  icon: React.ReactNode;
  value: string;
}

const MenuItem = ({ route, icon, value }: Props) => {
  return (
    <Link
      href={route}
      className="block px-4 py-2 mt-2 text-lg font-semibold text-gray-900 bg-transparent rounded-lg dark:text-white dark:hover:text-white dark:hover:bg-blue-700 hover:text-white hover:bg-blue-600"
    >
      {icon} {value}
    </Link>
  );
};

export default MenuItem;
