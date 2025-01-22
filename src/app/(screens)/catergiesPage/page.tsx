'use client';
import { useState, useEffect } from 'react';
import { ChevronRight, ArrowUpDown } from 'lucide-react';

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState(50);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const products = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      rating: 4.5,
      reviews: 125,
      image: '/catergiesPage/1.png',
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      price: 180,
      rating: 4.5,
      reviews: 157,
      image: '/catergiesPage/2.png',
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      reviews: 103,
      image: '/catergiesPage/3.png',
    },
    {
      id: 4,
      name: 'Skinny Fit Jeans',
      price: 240,
      originalPrice: 260,
      rating: 4.5,
      reviews: 145,
      image: '/catergiesPage/4.png',
    },
    {
      id: 5,
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
      reviews: 132,
      image: '/catergiesPage/5.png',
    },
    {
      id: 6,
      name: 'Sleeve Striped T-shirt',
      price: 130,
      originalPrice: 160,
      rating: 4.5,
      reviews: 118,
      image: '/catergiesPage/6.png',
    },
    {
      id: 7,
      name: 'Skinny Fit Jeans',
      price: 240,
      originalPrice: 260,
      rating: 4.5,
      reviews: 145,
      image: '/catergiesPage/7.png',
    },
    {
      id: 8,
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
      reviews: 132,
      image: '/catergiesPage/8.png',
    },
    {
      id: 9,
      name: 'Sleeve Striped T-shirt',
      price: 130,
      originalPrice: 160,
      rating: 4.5,
      reviews: 118,
      image: '/catergiesPage/9.png',
    },
  ];

  const categories = [
    'T-shirts',
    'Shorts',
    'Shirts',
    'Hoodie',
    'Jeans'
  ];

  const colors = [
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-blue-700',
    'bg-pink-500',
    'bg-gray-200',
    'bg-black',
  ];

  const sizes = [
    'XX-Small',
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    'XX-Large',
    '3X-Large',
    '4X-Large'
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`text-sm ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  // Function to log selected filter values
  const logFilterValues = () => {
    const filters = {
      category: selectedCategory,
      priceRange,
      colors: selectedColors,
      sizes: selectedSizes
    };
    console.log('Selected Filters:', filters);
  };

  const handleColorClick = (color: string) => {
    setSelectedColors((prev) => 
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prev) => 
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 p-6 bg-white border-r">
        <h2 className="text-lg font-medium mb-4">Filters</h2>
        
        {/* Categories */}
        <div className="mb-6">
          {categories.map((category) => (
            <div 
              key={category} 
              className={`flex items-center justify-between py-2 hover:bg-gray-50 cursor-pointer ${selectedCategory === category ? 'bg-gray-100' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="text-gray-600">{category}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-4">Price</h3>
          <div className="px-2">
            <input
              type="range"
              min="50"
              max="200"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-4">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleColorClick(color)}
                className={`w-6 h-6 rounded-full cursor-pointer ${color} ${selectedColors.includes(color) ? 'ring-2 ring-offset-2 ring-gray-300' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="text-md font-medium mb-4">Size</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <span
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`px-3 py-1 text-sm bg-gray-100 rounded-full cursor-pointer ${selectedSizes.includes(size) ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Apply Filter Button */}
        <button 
          onClick={logFilterValues} 
          className="mt-4 w-full bg-black text-white py-2 rounded-full"
        >
          Apply Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Home</span>
            <span className="text-sm text-gray-500">/</span>
            <span className="text-sm">Casual</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Showing 1-10 of 100 Products</span>
            <button className="flex items-center gap-1 text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
              Sort by: Most Popular <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <div className="flex items-center gap-2 my-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="text-sm text-red-500">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
