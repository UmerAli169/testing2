import React from 'react';
const categories = [{ image: '/casual.png' }, { image: '/formal.png' }, { image: '/party.png' }, { image: '/gym.png' }];
function DressStyle() {
  return (
    <div className='flex justify-center items-center '>
      <div className=' my-[64px]   rounded-lg  bg-[#F0F0F0] '>
        <div
          className='
        w-full h-full  max-h-[866px]    md:p-[64px] rounded-lg '
        >
          <h2 className='flex justify-center text-center ABeeZee mb-[65px] ABeeZee text-[32px] lg:text-[48px] leading-[56.74px] mt-[40px]  '>
            BROWSE BY dress STYLE
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 overflow-hidden '>
            {categories.map((category: any, index: number) => (
              <div
                key={index}
                className={`relative rounded-lg ${index === 0 || index === 3 ? 'col-span-1' : 'col-span-2'}`}
              >
                <img
                  src={category.image}
                  alt={category.productName || 'Product Image'}
                  className='w-full h-full max-h-[289px] object-cover object-top rounded-lg'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DressStyle;
