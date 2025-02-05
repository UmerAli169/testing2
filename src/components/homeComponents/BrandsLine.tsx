import React from 'react'

function BrandsLine() {
  return (
    <div className='bg-black w-full lg:h-[122px] flex flex-row  items-center justify-center '>
    <div className='flex p-4 flex-wrap w-full  gap-4 items-center justify-around py-[30px] '>
    <img src='/svgs/versac.svg' alt='Versace' className='lg:max-w-[166px] w-[116px] lg:max-h-[33px]  h-[23px]'  />
      <img src='/svgs/zara.svg' alt='Zara' className='lg:max-w-[91px]  w-[63px]  lg:max-h-[38px]  h-[27px]' />
      <img src='/svgs/gucci.svg' alt='Gucci'  className='lg:max-w-[156px] w-[106px] lg:max-h-[36px]  h-[25px]'/>
      <img src='/svgs/prada.svg' alt='Prada'  className='lg:max-w-[194px] w-[127px] lg:max-h-[32px]  h-[21px]'/>
      <img  src='/svgs/calvin.svg'  alt='Calvin Klein'  className='lg:max-w-[206px] w-[134px] lg:max-h-[33px]  h-[22px]'/>
    </div>
  </div>
  )
}

export default BrandsLine
