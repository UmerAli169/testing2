import React from 'react'

function BrandsLine() {
  return (
    <div className='bg-black w-[100%] flex flex-row  items-center justify-center '>
    <div className='flex p-10 flex-wrap w-full  gap-10 items-center justify-around '>
      <img src='/svgs/versac.svg' alt='Versace' className='h-[33.16px] w-[166.48px] top-[841px]  ' />
      <img src='/svgs/zara.svg' alt='Zara' className='h-[91px] w-[38.98px] top-[0.01px] ' />
      <img src='/svgs/gucci.svg' alt='Gucci' className='w-[156px] h-[32px] top-[1.86px] ' />
      <img src='/svgs/prada.svg' alt='Prada' className='h-[31.2px] w-[194px] top-[0.4px] ' />
      <img
        src='/svgs/calvin.svg'
        alt='Calvin Klein'
        className='h-[33.35px] w-[206.79px] top-[841px] left-[1131.48px] '
      />
    </div>
  </div>
  )
}

export default BrandsLine
