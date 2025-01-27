import React from 'react'

function FrontPage() {
  return (
     <div className='w-full '>
            <div className=' min-h-[662px] px-4 sm:px-[40px] lg:px-[100px]'>
              <div className='grid lg:grid-cols-2 gap-8  items-start '>
                {/* Left Content */}
                <div className='  pt-[10px] min-w-20 sm:w-full '>
                  <h1 className='ABeeZee  top-[273px]  font-normal text-sm sm:text-[58px] leading-[58px] '>
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                  </h1>
                  <p className='  ABeeZee text-[16px] font-normal my-[24px] leading-[22px] text-[#00000099]  max-w-[500px] h-[55px] top-[442px] left-[100px] '>
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your
                    individuality and cater to your sense of style.
                  </p>
    
                  <button className='  max-w-[210px] h-[52px] bg-black text-white text-center px-[54px] py-[16px] rounded-[62px] gap-[2px]  top-[507px] '>
                    Shop Now
                  </button>
    
                  {/* Stats */}
                  <div className='flex flex-wrap gap-4 mt-8 '>
                    <div className='text-black  font-sans text-base font-normal leading-6'>
                      <div className='text-xl lg:text-2xl font-bold'>200+</div>
                      <div className='text-gray-600 text-xs lg:text-sm'>International Brands</div>
                    </div>
                    <div className='text-black  font-sans text-base font-normal leading-6'>
                      <div className='text-xl lg:text-2xl font-bold'>2,000+</div>
                      <div className='text-gray-600 text-xs lg:text-sm'>High-Quality Products</div>
                    </div>
                    <div className='text-black  font-sans text-base font-normal leading-6'>
                      <div className='text-xl lg:text-2xl font-bold'>30,000+</div>
                      <div className='text-gray-600 text-xs lg:text-sm'>Happy Customers</div>
                    </div>
                  </div>
                </div>
    
                {/* Right Image */}
                <div className='relative'>
                  <img
                    src='/fasion.jpg'
                    alt='Fashion'
                    className='max-w-[662px] max-h-[662px] w-full  overflow-hidden object-cover object-top  rounded-lg'
                  />
                  <div className='absolute top-2 right-2'>
                    <div className='star-icon'>
                      <img src='svgs/homePic/star.svg' className='max-w-[104px] h-[104px] top-[220px] left-[1255px]   ' />
                    </div>
                  </div>
                  <div className='star-icon'>
                    <img src='svgs/homePic/star.svg' className='max-w-[56px] h-[56px] top-[431px] left-[750px]  ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default FrontPage
