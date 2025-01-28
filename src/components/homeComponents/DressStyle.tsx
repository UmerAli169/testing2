import React from 'react';
import { categories } from './data';

function DressStyle() {
  return (
    <>
      <div className=' my-[64px]  pt-[44px] bg-[#F0F0F0] rounded-lg'>  
      <h2 className="flex justify-center text-center ABeeZee text-[20px] md:text-[36px] lg:text-[48px] leading-[56.74px]  ">
        BROWSE BY dress STYLE
      </h2>

      <div className="mx-auto bg-[#F2F0F1] w-full h-full max-w-[1239px] max-h-[866px] overflow-hidden p-4 md:p-[64px] rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {categories.map((category: any, index: number) => (
            <div
              key={index}
              className={`relative rounded-lg ${
                (index === 0 || index === 3) ? 'col-span-1' : 'col-span-2'
              }`}
            >
              <img
                src={category.image} // Corrected from 'category.image' to {category.image}
                alt={category.productName || 'Product Image'}
                className="bg-white w-full h-full max-h-[289px] object-cover object-top rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>      </div>

    </>
  );
}

export default DressStyle;
