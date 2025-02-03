import { ChevronRight, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
// import { categories, colors, sizes, styles } from './data'; 
const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const colors = [
  'Red','Blue','Green','White','Black'
];

const sizes = [
 
  'Small',
  'Medium',
  'Large',
  'Extra Large',
  
];

const styles = ["Casual", "Formal", "Sporty", "Traditional", "Streetcar"];
interface Props {
  applyFilters: (filters: {
    category: string;
    minPrice: number;
    maxPrice: number;
    colors: string[];
    sizes: string[];
  }) => void;
}

const CategoryFilter = ({ applyFilters }: Props) => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>(50);
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Detect screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (e.target.name === 'minPrice') {
      if (value <= maxPrice) {
        setMinPrice(value);
      }
    } else if (e.target.name === 'maxPrice') {
      if (value >= minPrice) {
        setMaxPrice(value);
      }
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleColorClick = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
  };

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  const handleStyleClick = (style: string) => {
    setSelectedStyles((prev) => (prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]));
  };

  const handleApplyFilters = () => {
    const filters = {
      category: selectedCategory,
      minPrice,
      maxPrice,
      colors: selectedColors,
      sizes: selectedSizes,
      
    };
    applyFilters(filters);
    setIsFilterOpen(false); // Close modal on apply
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setIsFilterOpen(true)}
          className='p-2 bg-gray-800 text-white rounded-md fixed top-7 left-3 z-50'
        >
          <Menu className='w-5 h-5' />
        </button>
      )}

      {/* Filter Panel */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ${
          isMobile ? (isFilterOpen ? 'translate-x-0' : '-translate-x-full') : 'relative w-64 border-r'
        }`}
      >
        {/* Header */}
        <div className='flex justify-between items-center p-4 border-b'>
          <h2 className='ABeeZee font-medium'>Filters</h2>
          {isMobile && (
            <button onClick={() => setIsFilterOpen(false)} className='text-gray-600'>
              <X className='w-6 h-6' />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className='p-4'>
          <h3 className='font-medium mb-2'>Category</h3>
          {categories.map((category) => (
            <div
              key={category}
              className={`flex items-center justify-between py-2 hover:bg-gray-50 cursor-pointer ${
                selectedCategory === category ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              <span className='text-gray-600'>{category}</span>
              <ChevronRight className='w-4 h-4 text-gray-400' />
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className='p-4'>
          <h3 className='font-medium mb-2'>Price</h3>
          <div className='relative'>
            {/* Min Price Slider */}
            <input
              type='range'
              min='50'
              max='200'
              value={minPrice}
              name='minPrice'
              onChange={handleRangeChange}
              className='absolute w-full z-10'
            />
            {/* Max Price Slider */}
            <input
              type='range'
              min='50'
              max='200'
              value={maxPrice}
              name='maxPrice'
              onChange={handleRangeChange}
              className='absolute w-full z-20'
            />
            <div className='flex justify-between text-gray-500 mt-2'>
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className='p-4'>
          <h3 className='font-medium mb-2'>Colors</h3>
          <div className='flex flex-wrap gap-2'>
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleColorClick(color)}
                style={{ backgroundColor: color.toLowerCase() }}
                className={`relative w-8 h-8 rounded-full cursor-pointer border flex items-center justify-center 
          ${selectedColors.includes(color) ? 'ring-2 ring-gray-300' : ''}`}
              >
                {selectedColors.includes(color) && <span className='absolute text-white font-bold text-sm'>✔</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className='p-4'>
          <h3 className='font-medium mb-2'>Size</h3>
          <div className='flex flex-wrap gap-2'>
            {sizes.map((size) => (
              <span
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`px-3 py-1 bg-gray-100 rounded-full cursor-pointer ${
                  selectedSizes.includes(size) ? 'bg-gray-200' : 'hover:bg-gray-200'
                }`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Styles */}
        <div className='p-4'>
          <h3 className='font-medium mb-2'>Style</h3>
          <div className='flex flex-wrap gap-2'>
            {styles.map((style) => (
              <span
                key={style}
                onClick={() => handleStyleClick(style)}
                className={`px-3 py-1 bg-gray-100 rounded-full cursor-pointer ${
                  selectedStyles.includes(style) ? 'bg-gray-200' : 'hover:bg-gray-200'
                }`}
              >
                {style}
              </span>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <div className='p-4'>
          <button onClick={handleApplyFilters} className='w-full bg-black text-white py-2 rounded-full'>
            Apply Filters
          </button>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isMobile && isFilterOpen && (
        <div className='fixed inset-0 bg-black opacity-50 z-30' onClick={() => setIsFilterOpen(false)} />
      )}
    </>
  );
};

export default CategoryFilter;
