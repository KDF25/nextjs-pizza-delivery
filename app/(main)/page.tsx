import { GetSearchParams } from '@entities/home';
import { Home } from '@widgets/home';
import { FC } from 'react';

interface HomePageProps {
  searchParams: Promise<GetSearchParams>;
}

const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
  return <Home searchParams={await searchParams} />;
};

export default HomePage;
