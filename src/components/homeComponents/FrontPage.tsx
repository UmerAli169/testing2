import Link from 'next/link';
import React from 'react';

function FrontPage() {
  return (
    <div className='w-full '>
         <div className={`flex flex-col bg-[#F2F0F1] `}>
      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row justify-center mx-auto items-start w-full max-h-[663px]'>
        {/* Left Section: Text and Button */}
        <div className='w-full pt-[10px] sm:pt-[103px] pl-4 sm:pl-[100px]'>
          {/* Header Text */}
          <h1 className='text-black font-normal text-[36px] lg:text-[64px] sm:text-[44px] break-words lg:w-full lg:h-full max-w-[577px] max-h-[173px] sm:w-full sm:h-full leading-[34px] sm:leading-[64px] text-left z-1'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          {/* Paragraph */}
          <p className='text-gray-600 font-normal break-words mt-[20px] text-[14px] sm:text:[16px] sm:mt-[40px] max-w-[358px] h-[50px] sm:w-[545px] sm:h-[55px] leading-[20px] sm:leading-[22px] text-left'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </p>

          {/* Shop Now Button */}
          <div>
            <Link className='w-full' href='/'>
              <button className='bg-black text-white font-normal rounded-[50px] flex justify-center items-center w-[300px] sm:w-[368px] h-[52px] mt-[24px]  sm:h-[52px] sm:mt-[10px]'>
                <p>Shop Now</p>
              </button>
            </Link>
          </div>
          <div className='flex flex-col items-start w-full max-w-[611px] h-[67px] justify-between mt-[48px] leading-[22px] '>
            <div className='flex justify-between w-full'>
              {/* 200+ Section */}
              <div className='flex flex-col items-center w-[118px] h-[44px] sm:w-[157px] sm:h-[67px]'>
                <p className='text-[24px] sm:text-[40px] leading:[28.37px] sm:leading:[47.28px] font-bold'>200+</p>
                <p className='text-sm text-gray-500 pt-[10px] sm:pt-[20px]  leading:[22px]'>International Brands</p>
              </div>
              {/* 2,000+ Section */}
              <div className='flex flex-col items-center w-[118px] h-[44px] sm:w-[170px] sm:h-[67px]'>
                <p className='text-[24px] sm:text-[40px] leading:[28.37px] sm:leading:[47.28px] font-bold'>2,000+</p>
                <p className='text-sm text-gray-500 pt-[10px] sm:pt-[20px] leading:[22px]'>High-Quality Products</p>
              </div>
              {/* 30,000+ Section */}
              <div className='flex flex-col items-center  w-[118px] h-[44px] sm:w-[156px] sm:h-[67px]'>
                <p className='text-[24px] sm:text-[40px] leading:[28.37px] sm:leading:[47.28px] font-bold'>30,000+</p>
                <p className='text-sm text-gray-500 pt-[10px] sm:pt-[20px] leading:[22px]'>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className='w-full flex justify-center overflow-hidden'>
        <div className='relative  '>
            <img src='/fasion.jpg' alt='Fashion' className='lg:max-h-[662px]  lg:w-full sm:max-w-[390px] max-h-[648px] sm:max-h-[548px] sm:object-cover  object-top 
             ' />
            <div className='absolute   top-[68px] right-[81px] w-[104px] h-[104px]'>
              {/* <img src='svgs/homePic/star.svg' className='max-w-[104px] h-[104px] top-[220px] left-[1255px]   ' /> */}
            </div>
            <div className=' absolute  bottom-[311px] left-[75px] w-[56px] h-[56px] '>
              {/* <img src='svgs/homePic/star.svg' className='max-w-[56px] h-[56px] top-[431px] left-[750px]  ' /> */}
            </div>
          </div>
       
      </div>
        
      </div>
      </div>
    </div>
  );
}

export default FrontPage;
