'use client';

import FrontPage from '../../components/homeComponents/FrontPage';
import BrandsLine from '../../components/homeComponents/BrandsLine';
import NewArrivals from '../../components/homeComponents/NewArrivals';
import DressStyle from '../../components/homeComponents/DressStyle';
import Reviews from '@/components/homeComponents/Reviews';

const HomePage = () => {
  return (
    <div className='bg-[#F2F0F1]
 justify-center flex-col items-center'>
      <FrontPage />
      <BrandsLine />
      <NewArrivals />
      <DressStyle />
      <Reviews/>
    </div>
  );
};

export default HomePage;
