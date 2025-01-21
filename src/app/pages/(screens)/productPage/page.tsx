// ProductDetails.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MoreHorizontal } from 'lucide-react';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Rating & Reviews');

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
  const colors = ['#000000', '#333333', '#0000AA'];

  const reviews = [
    {
      name: 'Samantha D.',
      rating: 4.5,
      date: 'Posted on August 14, 2023',
      text: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',
      verified: true,
    },
    {
      name: 'Alex M.',
      rating: 4,
      date: 'Posted on August 15, 2023',
      text: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
      verified: true,
    }
  ];

  const relatedProducts = [
    {
      name: 'Polo with Contrast Trims',
      image: '/polo-contrast.jpg',
    },
    {
      name: 'Gradient Graphic T-shirt',
      image: '/gradient-tee.jpg',
    },
    {
      name: 'Polo with Tipping Details',
      image: '/polo-tipping.jpg',
    },
    {
      name: 'Black Striped T-shirt',
      image: '/striped-tee.jpg',
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
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
    <div className=" mx-auto mycontainer">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <span>Home</span>
        <span>/</span>
        <span>Shop</span>
        <span>/</span>
        <span>Men</span>
        <span>/</span>
        <span>T-shirts</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-8">
            <img
              src="/t-shirt.jpg"
              alt="One Life Graphic T-shirt"
              className="w-full object-contain"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-lg p-2">
              <img
                src="/t-shirt-1.jpg"
                alt="T-shirt view 1"
                className="w-full object-contain"
              />
            </div>
            <div className="border rounded-lg p-2">
              <img
                src="/t-shirt-2.jpg"
                alt="T-shirt view 2"
                className="w-full object-contain"
              />
            </div>
            <div className="border rounded-lg p-2">
              <img
                src="/t-shirt-3.jpg"
                alt="T-shirt view 3"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">One Life Graphic T-shirt</h1>
          <div className="flex items-center gap-2 mb-4">
            {renderStars(4.5)}
            <span className="text-sm text-gray-600">4.5/5</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold">$260</span>
            <span className="text-gray-500 line-through">$300</span>
            <span className="text-red-500">-40%</span>
          </div>

          <p className="text-gray-600 mb-6">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Select Colors</h3>
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Choose Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center border rounded-lg">
              <button
                className="px-4 py-2"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-4 py-2"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="flex-1 bg-black text-white py-2 px-4 rounded-lg">
              Add to Cart
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b mb-6">
            <div className="flex gap-6">
              {['Product Details', 'Rating & Reviews', 'FAQs'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 ${
                    activeTab === tab
                      ? 'border-b-2 border-black'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">ALL Reviews (451)</h3>
              <button className="text-sm bg-black text-white px-4 py-2 rounded-lg">
                Write a Review
              </button>
            </div>

            {reviews.map((review, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.name}</span>
                      {review.verified && (
                        <span className="bg-green-500 w-2 h-2 rounded-full" />
                      )}
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <button>
                    <MoreHorizontal className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                <p className="text-gray-600 mb-2">{review.text}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You might also like section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((product, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <div className="aspect-square relative mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-medium">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;