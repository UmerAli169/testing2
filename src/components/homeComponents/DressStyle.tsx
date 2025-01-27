import React from 'react';
import { categories } from './data';

function DressStyle() {
  return (
    <>
     
      <h2 className=' flex justify-center  2xl max-w-[577px]    ABeeZee text-[20px] md:text-[36px] lg:text-[48px] leading-[56.74px] py-[4px]'>
        BROWSE BY DRESS STYLE
      </h2>
      <div className='mx-auto bg-[#F2F0F1] w-full h-full max-w-[1239px] max-h-[866px] overflow-hidden p-4 md:p-[64px] rounded-lg shadow-md '>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {categories.map((category: any, index: number) => (
            <div
              key={index.toString()}
              className={`relative rounded-lg ${index === 0 || index === 3 ? 'col-span-1' : 'col-span-2'}`}
            >
              <img
                src={category.image}
                className=' bg-[#FFFFFF] w-full h-full max-h-[289px] overflow-hidden object-cover object-top rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DressStyle;
