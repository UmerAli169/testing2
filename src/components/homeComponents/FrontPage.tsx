import React from 'react';

function FrontPage() {
  return (
    <div className='w-full '>
      <div className=' w-full h-[662px] px-4  lg:px-[100px] bg-[#F2F0F1]  '>
        <div className='grid lg:grid-cols-2 gap-20  items-start  '>
          {/* Left Content */}
          <div className=' mycontainer '>
            <h1 className='mycontainer ABeeZee text-[44px] max-w-[558px]  lg:mt-[103px] sm:mt-[30px]  mt-[40px] leading-[64px]'>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p className='  ABeeZee text-[16px] font-normal my-[24px] leading-[22px] text-[#00000099]  '>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your
              individuality and cater to your sense of style.
            </p>

            <button className=' sm:w-[600px] lg:max-w-[210px] h-[52px] bg-black text-white text-center px-[54px] py-[16px] rounded-[62px] gap-[2px] top-[507px]'>
              Shop Now
            </button>

            {/* Stats */}
            <div className='flex flex-wrap gap-2 mt-8  ABeeZee gap-[95px]'>
              <div className='text-black  font-sans text-base font-normal leading-6'>
                <div className=' '>200+</div>
                <div className='text-gray-600  lg:ABeeZee'>International Brands</div>
              </div>
              <div className='text-black  font-sans text-base font-normal leading-6'>
                <div className='text-xl lg:text-2xl '>2,000+</div>
                <div className='text-gray-600 lg:ABeeZee'>High-Quality Products</div>
              </div>
              <div className='text-black  font-sans text-base font-normal leading-6'>
                <div className='text-xl lg:text-2xl '>30,000+</div>
                <div className='text-gray-600 lg:ABeeZee'>Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative mycontainer '>
            <img src='/fasion.jpg' alt='Fashion' className='lg:max-h-[662px]  lg:w-full sm:max-w-[390px] sm:max-h-[448px]  object-cover object-top ' />
            <div className='absolute   top-[68px] right-[81px] w-[104px] h-[104px]'>
              <img src='svgs/homePic/star.svg' className='max-w-[104px] h-[104px] top-[220px] left-[1255px]   ' />
            </div>
            <div className=' absolute  bottom-[311px] left-[75px] w-[56px] h-[56px] '>
              <img src='svgs/homePic/star.svg' className='max-w-[56px] h-[56px] top-[431px] left-[750px]  ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
