'use client';
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { categories, reviews, newArrivals, topSelling } from '../data';
import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

function NewArrivals() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    router.push('/productPage');
  };

  const ProductCard = ({ product }: any) => (
    <div
      className=' bg-[#F2F0F1] rounded-lg p-4 transition-shadow duration-200 hover:shadow-lg'
      onMouseEnter={() => setHoveredItem(product.id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className='relative aspect-square mb-4'>
        <img src={product.image} alt={product.name} className='w-full h-full object-cover rounded-md' />
      </div>
      <h3 className='text-sm font-medium mb-2'>{product.name}</h3>
      <div className='flex items-center gap-2 mb-2'>
        <span className='text-lg font-bold'>${product.price}</span>
        {product.originalPrice && <span className='text-sm text-gray-500 line-through'>${product.originalPrice}</span>}
      </div>
      {renderRatingStars(product.rating)}
    </div>
  );

  const renderRatingStars = (rating: any) => (
    <div className='flex items-center  gap-1'>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className='text-sm text-gray-600 ml-1'>{rating}</span>
    </div>
  );
  return (
    <>
      <h2 className='flex justify-center text-2xl w-full font-normal mb-4 w-[337px] h-[57px]  top-[992px] left-[551px] ABeeZee text-[48px] leading-[56.74px] py-[44px]'>
        New Arrivals
      </h2>

      <div className='grid grid-cols-2 py-[48px] md:grid-cols-4 gap-6' onClick={handleClick}>
        {newArrivals.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className='h-[52px] bg-[#F2F0F1] w-full   text-black text-center px-[54px] py-[16px] rounded-[62px] gap-[2px]'>
        View All
      </button>

      <h2 className='flex justify-center text-2xl w-full font-normal mb-4 w-[337px] h-[57px]  top-[992px] left-[551px] ABeeZee text-[48px] leading-[56.74px] py-[44px]'>
        top Selling
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 py-[48px] gap-6'>
        {topSelling.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className=' w-[210px] h-[52px] bg-[#F2F0F1]    text-black text-center px-[54px] py-[16px] rounded-[62px] gap-[2px]'>
        View All
      </button>
    </>
  );
}

export default NewArrivals;
