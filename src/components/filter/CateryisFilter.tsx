import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import {  categories, colors, sizes } from './data';

function CateryisFilter() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState(50);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const handleColorClick = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
  };

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  const logFilterValues = () => {
    console.log('Selected Filters:', {
      category: selectedCategory,
      priceRange,
      colors: selectedColors,
      sizes: selectedSizes,
    });
  };
  return (
    <div>
      <div className='w-64 p-6 bg-white border-r '>
        <h2 className='ABeeZee font-medium mb-4'>Filters</h2>

        {/* Categories */}
        <div className='mb-6'>
          {categories.map((category) => (
            <div
              key={category}
              className={`flex items-center justify-between py-2 hover:bg-gray-50 cursor-pointer ${
                selectedCategory === category ? 'bg-gray-100' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className='text-gray-600'>{category}</span>
              <ChevronRight className='w-4 h-4 text-gray-400' />
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className='mb-6'>
          <h3 className='text-md font-medium mb-4'>Price</h3>
          <div className='px-2'>
            <input
              type='range'
              min='50'
              max='200'
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
            />
            <div className='flex justify-between mt-2 ABeeZee text-gray-500'>
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className='mb-6'>
          <h3 className='text-md font-medium mb-4'>Colors</h3>
          <div className='flex flex-wrap gap-2'>
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleColorClick(color)}
                className={`w-6 h-6 rounded-full cursor-pointer ${color} ${
                  selectedColors.includes(color) ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className='text-md font-medium mb-4'>Size</h3>
          <div className='flex flex-wrap gap-2'>
            {sizes.map((size) => (
              <span
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`px-3 py-1 ABeeZee bg-gray-100 rounded-full cursor-pointer ${
                  selectedSizes.includes(size) ? 'bg-gray-200' : 'hover:bg-gray-200'
                }`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Apply Filter Button */}
        <button onClick={logFilterValues} className='mt-4 w-full bg-black text-white py-2 rounded-full'>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default CateryisFilter;
