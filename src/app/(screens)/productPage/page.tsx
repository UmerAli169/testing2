// ProductDetails.js
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MoreHorizontal, ChevronUp, Filter } from 'lucide-react';
import { sizes, colors, reviews, relatedProducts } from './data';
const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Rating & Reviews');

  const renderStars = (rating: any) => {
    return (
      <div className='flex gap-0.5'>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className=' mx-auto mycontainer'>
      {/* Breadcrumb */}
      <div className='flex items-center gap-2 text-sm mb-8'>
        <span>Home</span>
        <span>/</span>
        <span>Shop</span>
        <span>/</span>
        <span>Men</span>
        <span>/</span>
        <span>T-shirts</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column - Images */}
        <div className='space-y-4'>
          <div className=' rounded-lg p-8'>
            <img src='/ProductDetails/mian.png' alt='One Life Graphic T-shirt' className='w-full object-contain' />
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='border rounded-lg p-2'>
              <img src='/ProductDetails/mian.png' alt='T-shirt view 1' className='w-full object-contain' />
            </div>
            <div className='border rounded-lg p-2'>
              <img src='/ProductDetails/mainfront.png' alt='T-shirt view 2' className='w-full object-contain' />
            </div>
            <div className='border rounded-lg p-2'>
              <img src='/ProductDetails/neck.png' alt='T-shirt view 3' className='w-full object-contain' />
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div>
          <h1 className='text-2xl font-semibold mb-2'>One Life Graphic T-shirt</h1>
          <div className='flex items-center gap-2 mb-4'>
            {renderStars(4.5)}
            <span className='text-sm text-gray-600'>4.5/5</span>
          </div>

          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl font-bold'>$260</span>
            <span className='text-gray-500 line-through'>$300</span>
            <span className='text-red-500'>-40%</span>
          </div>

          <p className='text-gray-600 mb-6'>
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers
            superior comfort and style.
          </p>

          {/* Color Selection */}
          <div className='mb-6'>
            <h3 className='font-medium mb-2'>Select Colors</h3>
            <div className='flex gap-2'>
              {colors.map((color: any, index: any) => (
                <button
                  key={index}
                  className='w-8 h-8 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className='mb-6'>
            <h3 className='font-medium mb-2'>Choose Size</h3>
            <div className='flex gap-2'>
              {sizes.map((size: any) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size ? 'bg-black text-white' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className='flex gap-4 mb-8'>
            <div className='flex items-center border rounded-lg'>
              <button className='px-4 py-2' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <span className='px-4 py-2'>{quantity}</span>
              <button className='px-4 py-2' onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button className='flex-1 bg-black text-white py-2 px-4 rounded-lg'>Add to Cart</button>
          </div>

          {/* Tabs */}
          <div className='border-b mb-6'>
            <div className='flex gap-6'>
              {['Product Details', 'Rating & Reviews', 'FAQs'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 ${activeTab === tab ? 'border-b-2 border-black' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className='mt-12'>
            {/* Reviews Section */}
            <div className='space-y-6 mt-8'>
              <div className='flex justify-between items-center'>
                <h3 className='font-medium'>ALL Reviews (451)</h3>
                <div className='flex gap-4'>
                  {/* Filter Reviews Button with Filter icon */}
                  <button className='flex items-center bg-gray-200 px-4 py-2 rounded-full text-sm'>
                    <Filter className='w-5 h-5 text-gray-600 mr-2' />
                  </button>
                  {/* Latest Reviews Button with ^ icon */}
                  <button className='flex items-center bg-gray-200 px-4 py-2 rounded-full text-sm'>
                    <span className='mr-2'>Latest</span>
                    <ChevronUp className='w-4 h-4 text-gray-600' />
                  </button>

                  <button className='text-sm bg-black text-white px-4 py-2 rounded-full'>Write a Review</button>
                </div>
              </div>

              {/* Review List */}
              {reviews.slice(0, 5).map((review: any, index: any) => (
                <div key={index} className='border rounded-lg p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <div>
                      <div className='flex items-center gap-2'>
                        <span className='font-medium'>{review.name}</span>
                        {review.verified && <span className='bg-green-500 w-2 h-2 rounded-full' />}
                      </div>
                      {renderStars(review.rating)}
                    </div>
                    <button>
                      <MoreHorizontal className='w-6 h-6 text-gray-500' />
                    </button>
                  </div>
                  <p className='text-gray-600 mb-2'>{review.text}</p>
                  <p className='text-sm text-gray-500'>{review.date}</p>
                </div>
              ))}

              {/* Read More Reviews Button */}
              <div className='text-center mt-4'>
                <button className='border bg-white text-black py-2 px-4 rounded-full'>Read More Reviews</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You might also like section */}
      <div className='mt-12'>
        <h2 className='text-xl font-semibold mb-6 text-center'>You might also like</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {relatedProducts.map((product: any, index: any) => (
            <div key={index} className='bg-gray-100 rounded-lg p-4'>
              <div className='aspect-square relative mb-2'>
                <img src={product.image} alt={product.name} className='object-cover' />
              </div>
              <h3 className='text-sm font-medium'>{product.name}</h3>

              {/* Rating */}
              <div className='flex items-center mt-2'>
                {renderStars(product.rating)} {/* Use your renderStars function */}
                <span className='text-sm text-gray-600 ml-2'>({product.rating}/5)</span>
              </div>
              {/* Price */}
              <div className='flex items-center gap-2 mt-2'>
                <span className='text-sm font-bold text-black'>${product.price}</span>
                {product.oldPrice && <span className='text-sm text-gray-500 line-through'>${product.oldPrice}</span>}
                {product.discount && <span className='text-sm text-red-500'>-{product.discount}%</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
