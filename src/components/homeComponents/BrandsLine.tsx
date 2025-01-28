import React from 'react'

function BrandsLine() {
  return (
    <div className='bg-black w-full lg:h-[122px] flex flex-row  items-center justify-center '>
    <div className='flex p-4 flex-wrap w-full  gap-4 items-center justify-around py-[30px] '>
      <img src='/svgs/versac.svg' alt='Versace'  />
      <img src='/svgs/zara.svg' alt='Zara'  />
      <img src='/svgs/gucci.svg' alt='Gucci'  />
      <img src='/svgs/prada.svg' alt='Prada'  />
      <img
        src='/svgs/calvin.svg'
        alt='Calvin Klein'
        
      />
    </div>
  </div>
  )
}

export default BrandsLine
