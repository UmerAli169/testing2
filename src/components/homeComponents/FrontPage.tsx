import Link from 'next/link';
import React from 'react';

function FrontPage() {
  return (
    <div className=' flex flex-col px-[100px] bg-[#F2F0F1] lg:flex-row justify-center items-start w-full lg:max-h-[663px] max-h-[853px]  '>
      <div className='w-full lg:pt-[103px] pt-[10px]   '>
        <p
          className=' font-ABeeZee font-normal 
    lg:text-[64px] lg:w-[577px] lg:leading-[64px]  
   
text-[36px] w-[315px] leading-[34px]'
        >
          FIND CLOTHES THAT MATCH YOUR STYLE
        </p>

        <p
          className='font-ABeeZee text-black text-opacity-60 py-[10px] 
    lg:text-[16px] text-[14px] 
    lg:w-[545px] w-[358px] 
    lg:leading-[22px] leading-[20px]'
        >
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
          and cater to your sense of style.
        </p>

        <button
          className='bg-black text-white font-ABeeZee 
    rounded-full flex justify-center items-center 
  w-[368px] h-[52px] lg:w-[210px]
mt-[10px]'
        >
          Shop Now
        </button>

        <div className='  items-start lg:w-[611px] w-[400px] lg:h-[67px] my-[30px]'>
          <div className='flex justify-around '>
            <div className=' font-ABeeZee flex flex-col items-center  '>
              <p className='lg:text-[40px] text-[24px] leading-[28.37px] lg;leading-[47.28px] font-normal'>200+</p>

              <p className='lg:text-[16px] text-[12px]    text-black text-opacity-60       leading-[22px] font-normal mt-2'>International Brands</p>
            </div> 
            <div className="border-l-[1px] border-gray-300 h-[50px] mx-4" />


            <div className='  font-ABeeZee flex flex-col items-center '>
              <p className='lg:text-[40px] text-[24px] leading-[28.37px] lg;leading-[47.28px] font-normal'>2,000+</p>
              <p className='lg:text-[16px] text-[12px]      text-black text-opacity-60     leading-[22px] font-normal mt-2'>High-Quality Products</p>
            </div>
            <div className="border-l-[1px] border-gray-300 h-[50px] mx-4" />


            <div className=' font-ABeeZee flex flex-col items-center '>
              <p className='lg:text-[40px] text-[24px] leading-[28.37px] lg;leading-[47.28px] font-normal'>30,000+</p>
              <p className='lg:text-[16px] text-[12px]      text-black text-opacity-60     leading-[22px] font-normal mt-2'>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' min-w-[550px] flex justify-start overflow-hidden '>
        <div className='relative lg:top-[90px] top-[10px] h-[590px] '>
          <img src='/fasion.jpg' alt='Fashion' className=' lg:min-h-[662px] w-[390px]  h-[603px] object-cover' />

          <div className='absolute top-[10%] right-[0%] w-[50px] h-[80px] lg:w-[104px] lg:h-[104px]'>
            <img src='svgs/homePic/star.svg' className='w-full h-full' />
          </div>
          <div className='absolute bottom-[60%] left-[2%] w-[45px] h-[45px] lg:w-[56px] lg:h-[56px]'>
            <img src='svgs/homePic/star.svg' className='w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
