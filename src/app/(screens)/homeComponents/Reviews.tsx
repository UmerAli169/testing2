"use client "
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Reviews() {
    const [hoveredItem, setHoveredItem] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const router = useRouter();

 

 
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  return (
    <>
       <div className='m-10 '>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='  font-normal mb-4 w-[560px]  top-[3364px] left-100px] ABeeZee text-[48px] leading-[56.74px] py-[44px]'>OUR HAPPY CUSTOMERS</h2>
          <div className='flex gap-2'>
            <button onClick={prevReview} className='p-2 rounded-full hover:bg-gray-100' aria-label='Previous review'>
              &larr; 
            </button>
            <button onClick={nextReview} className='p-2 rounded-full hover:bg-gray-100' aria-label='Next review'>
              &rarr; 
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {reviews.map((review:any, index:number) => (
            <div
              key={review.id}
              className={` bg-[#FFFFFF] p-6 rounded-lg   ${
                index === currentReview ? 'md:block' : 'hidden md:block'
              }`}
            >
              <div className='flex gap-1 mb-2'>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                ))}
              </div>
              <p className='font-semibold'>{review.name}</p>
              <p className='text-gray-600 text-sm mb-4'>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Reviews
