import { Head } from '@inertiajs/react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import SideMenu from '@/Components/SideMenu';
import PortfolioCard from '@/Components/PortfolioCard';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
}

export default function Welcome({ canLogin, canRegister }: Props) {
  const route = useRoute();
  const page = useTypedPage();

  return (
    <>
      <Head title="Welcome" />

      <div className="flex flex-row relative sm:flex min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-blue-500 selection:text-white">
        <SideMenu />
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          {/*CENTER HEADER LOGO*/}
          <div className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <PortfolioCard
                title={'One Moose'}
                description={
                  'Two moose red moose blue moose so much shit to doose moose. This is a potato moose, turns into vodka mooose.'
                }
                cta={'Get Shit Done'}
              />
              <PortfolioCard
                title={'Red Title, Blue Title'}
                description={
                  'Loopy doopy scoopy da poopy. This some bullshit lorem upsum yo...'
                }
                cta={'Do Shit'}
              />
              <PortfolioCard
                title={'A Goose on the Loose'}
                description={
                  'Loopy doopy scoopy da poopy. This some bullshit lorem upsum yo...'
                }
                cta={'Do Shit'}
              />
              <PortfolioCard
                title={'Red Moose Goose'}
                description={
                  'Loopy doopy scoopy da poopy. This some bullshit lorem upsum yo...'
                }
                cta={'Do It'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
