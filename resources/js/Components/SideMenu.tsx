import React from 'react';
import HomeIcon from '@mui/icons-material/HomeSharp';
import BookmarksIcon from '@mui/icons-material/BookmarksSharp';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailReadSharp';
import ArticleIcon from '@mui/icons-material/ArticleSharp';
import AppsIcon from '@mui/icons-material/AppsSharp';
import WorkIcon from '@mui/icons-material/WorkSharp';
import PrimaryLogo from '@/Components/PrimaryLogo';
import MenuItem from '@/Components/MenuItem';
import EmojiEventsIcon from '@mui/icons-material/EmojiEventsSharp';

const SideMenu = () => {
  return (
    <div className="flex flex-col h-5/6">
      <div className="flex justify-center">
        <PrimaryLogo height={150} width={150} />
      </div>
      <div className="relative ml-5 h-screen dark:bg-dark">
        <div
          className={`h-2/3 flex flex-col items-center relative w-52 my-3 py-2 bg-white rounded-md shadow-xl dark:bg-dark-bg dark:bg-gradient-to-bl from-gray-700/50 via-transparent`}
        >
          <MenuItem route={'/'} icon={<HomeIcon />} value={'Home'} />
          <MenuItem route={'/about'} icon={<BookmarksIcon />} value={'About'} />
          <MenuItem
            route={'/achievements'}
            icon={<EmojiEventsIcon />}
            value={'Achievements'}
          />
          <MenuItem
            route={'/experience'}
            icon={<WorkIcon />}
            value={'Experience'}
          />
          <MenuItem route={'/resume'} icon={<ArticleIcon />} value={'Resume'} />
          <MenuItem route={'/skills'} icon={<AppsIcon />} value={'Skills'} />
          <MenuItem
            route={'/contact'}
            icon={<MarkEmailReadIcon />}
            value={'Contact'}
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
