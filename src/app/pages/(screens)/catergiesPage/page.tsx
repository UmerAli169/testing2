'use client';
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronRight } from 'lucide-react';

const ProductListing = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('Casual');

  const products = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      rating: 4.5,
      reviews: 125,
      image: '/api/placeholder/240/300',
    },
    {
      id: 2,
      name: 'Polo with Tipping Details',
      price: 180,
      rating: 4.5,
      reviews: 157,
      image: '/api/placeholder/240/300',
    },
    {
      id: 3,
      name: 'Black Striped T-shirt',
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      reviews: 103,
      image: '/api/placeholder/240/300',
    }
  ];

  const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
  const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];
  
  const colors = [
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-cyan-500',
    'bg-blue-500',
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

  return (
    <div className="min-h-screen bg-white">
    

      {/* Filter Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 left-0 w-80 bg-white transform transition-transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              {categories.map((category) => (
                <div key={category} className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">{category}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Price</h3>
              <div className="px-2">
                <input
                  type="range"
                  min="50"
                  max="200"
                  defaultValue="50"
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>$50</span>
                  <span>$200</span>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${color} border border-gray-200`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Dress Style</h3>
              <div className="space-y-2">
                {dressStyles.map((style) => (
                  <div
                    key={style}
                    className="flex items-center justify-between py-2 border-b border-gray-100"
                  >
                    <span className="text-gray-700">{style}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Filter Button */}
            <button className="w-full bg-black text-white py-3 rounded-lg mt-4">
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 px-4">
        <div className="grid grid-cols-2 gap-4 mt-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-sm font-medium truncate">{product.name}</h3>
                <div className="flex items-center gap-1 my-1">
                  <div className="flex text-yellow-400 text-xs">
                    {"★".repeat(Math.floor(product.rating))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xs text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="text-xs text-red-500">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListing;