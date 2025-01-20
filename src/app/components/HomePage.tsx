'use client';
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import Navbar from './Navbar';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import { Mail } from 'lucide-react';

const HomePage = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  const categories = [
    { name: 'Casual', image: '/cc1.png' },
    { name: 'Formal', image: '/cc2.png' },
    { name: 'Party', image: '/cc3.png' },
    { name: 'Gym', image: '/cc4.png' },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: '"The Shop turned my dull wardrobe into days of excitement! The customer service is fantastic, making every order so smooth. Every piece I bought has exceeded my expectations."',
    },
    {
      id: 2,
      name: 'Alex K.',
      rating: 5,
      text: '"Finding clothes that match my style used to be a challenge until I discovered ShopCo. The range of sizes is impressive, and they always have a great variety of looks and essentials."',
    },
    {
      id: 3,
      name: 'James L.',
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon ShopCo. The selection is fantastic, and I love how they keep up their stock with the latest trends.",
    },
    {
      id: 4,
      name: 'Maria S.',
      rating: 5,
      text: '"Shopping here has been a game-changer for my wardrobe. The quality and style are unmatched!"',
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  const newArrivals = [
    { id: 1, name: 'T-shirt with Logo Details', price: 120, originalPrice: 140, rating: 4.5, image: '/n1.png' },
    { id: 2, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, rating: 4.2, image: '/n2.png' },
    { id: 3, name: 'Checkered Shirt', price: 180, rating: 4.0, image: '/n3.png' },
    { id: 4, name: 'Orange Sport T-shirt', price: 130, originalPrice: 160, rating: 4.3, image: '/n4.png' },
  ];

  const topSelling = [
    { id: 5, name: 'Vertical Striped Shirt', price: 215, originalPrice: 235, rating: 4.4, image: '/t1.png' },
    { id: 6, name: 'Coverage Graphic T-shirt', price: 145, rating: 4.2, image: '/t2.png' },
    { id: 7, name: 'Loose Fit Bermuda Shorts', price: 60, rating: 4.1, image: '/t3.png' },
    { id: 8, name: 'Relaxed Skinny Jeans', price: 210, rating: 4.3, image: '/t4.png' },
  ];

  const renderRatingStars = (rating) => (
    <div className='flex items-center gap-1'>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className='text-sm text-gray-600 ml-1'>{rating}</span>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div
      className='bg-white rounded-lg p-4 transition-shadow duration-200 hover:shadow-lg'
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

  return (
    <>
      {/* <div className='max-w-5xl mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-4'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='text-gray-600 mb-6'>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your
              individuality and cater to your sense of style.
            </p>
            <button className='w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800'>
              Shop Now
            </button>

            <div className='grid grid-cols-3 gap-4 mt-8'>
              <div>
                <div className='text-xl lg:text-2xl font-bold'>200+</div>
                <div className='text-gray-600 text-xs lg:text-sm'>International Brands</div>
              </div>
              <div>
                <div className='text-xl lg:text-2xl font-bold'>2,000+</div>
                <div className='text-gray-600 text-xs lg:text-sm'>High-Quality Products</div>
              </div>
              <div>
                <div className='text-xl lg:text-2xl font-bold'>30,000+</div>
                <div className='text-gray-600 text-xs lg:text-sm'>Happy Customers</div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 relative'>
            <div className='aspect-[3/4] relative'>
              <Image src='/fasion.jpg' alt='Fashion models' layout='fill' objectFit='cover' className='rounded-lg' />
              <span className='absolute top-4 right-4 text-2xl'>✨</span>
              <span className='absolute bottom-4 left-4 text-2xl'>✨</span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-black h-[88px] flex items-center justify-center'>
        <div className='flex space-x-[100px]'>
          <img src='/svgs/versac.svg' alt='Versace' className='h-12' />
          <img
            src='
        /svgs/zara.svg'
            alt='Zara'  
            className='h-12'
          />
          <img
            src='
        /svgs/gucci.svg'
            alt='Gucci'
            className='h-12'
          />
          <img
            src='
        /svgs/prada.svg'
            alt='Prada'
            className='h-12'
          />
          <img
            src='
        /svgs/calvin.svg'
            alt='Calvin Klein'
            className='h-12'
          />
        </div>
      </div> */}

      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='mb-16 flex justify-center items-center'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold mb-8'>BROWSE BY DRESS STYLE</h2>
            <div className='w-full max-w-md mx-auto bg-gray-100 p-4 rounded-lg'>
              <div className='grid grid-cols-2 gap-4'>
                {categories.map((category, index) => (
                  <div key={category.name} className='relative rounded-lg overflow-hidden'>
                    <img src={category.image} alt={category.name} className='w-full h-full object-cover' />
                    <div className='absolute bottom-4 left-4'>
                      <h3 className='text-lg font-semibold text-gray-800'>{category.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        {/* <div className='mb-16'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-bold'>OUR HAPPY CUSTOMERS</h2>
            <div className='flex gap-2'>
              <button onClick={prevReview} className='p-2 rounded-full hover:bg-gray-100' aria-label='Previous review'>
                <ChevronLeft className='w-6 h-6' />
              </button>
              <button onClick={nextReview} className='p-2 rounded-full hover:bg-gray-100' aria-label='Next review'>
                <ChevronRight className='w-6 h-6' />
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-white p-6 rounded-lg shadow-none ${
                  index === currentReview ? 'md:block' : 'hidden md:block'
                }`}
              >
                <div className='flex gap-1 mb-2'>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                  ))}
                </div>
                <p className='text-gray-600 text-sm mb-4'>{review.text}</p>
                <p className='font-semibold'>{review.name}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Newsletter Section */}
        {/* <div className='bg-black rounded-xl p-6 text-white mb-16'>
          <div className='flex flex-col items-center justify-between md:flex-row gap-6 md:gap-8'>
            <h2 className='text-xl font-semibold tracking-wide'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>
              <div className='relative flex-grow max-w-md'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30'
                />
              </div>
              <button className='px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 whitespace-nowrap'>
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
