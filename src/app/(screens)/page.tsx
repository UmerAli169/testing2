'use client';

import FrontPage from './homeComponents/frontPage';
import BrandsLine from './homeComponents/BrandsLine';
import NewArrivals from './homeComponents/NewArrivals';
import DressStyle from './homeComponents//DressStyle';

const HomePage = () => {
  return (
    <div className='flex bg-[#801a4d] justify-center flex-col items-center'>
      <FrontPage />
      {/* <BrandsLine /> */}
      {/* <NewArrivals /> */}
      {/* <DressStyle /> */}
    </div>
  );
};

export default HomePage;
