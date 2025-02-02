import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { categories, colors, sizes, styles } from "./data";

interface Props {
  applyFilters: (filters: {
    category: string;
    minPrice: number;
    maxPrice: number;
    colors: string[];
    sizes: string[];
    styles: string[];
  }) => void;
}

function CategoryFilter({ applyFilters }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

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
  const handleStyleClick = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };
  const handleApplyFilters = () => {
    applyFilters({
      category: selectedCategory,
      minPrice,
      maxPrice,
      colors: selectedColors,
      sizes: selectedSizes,
      styles: selectedStyles,
    });
  };

  return (
    <div className="w-64 p-6 bg-white border-r">
      <div className="flex justify-between items-center w-full">
        <h2 className="ABeeZee font-medium mb-4">Filters</h2>
        <img
          src="/svgs/filter/filter.svg"
          alt="Filter Icon"
          className="w-[19.5px] h-[19.5px]"
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        {categories.map((category) => (
          <div
            key={category}
            className={`flex items-center justify-between py-2 hover:bg-gray-50 cursor-pointer ${
              selectedCategory === category ? "bg-gray-100" : ""
            }`}
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
          <div className="relative h-6">
            {/* Background Line */}
            <div className="absolute w-full h-1 bg-gray-200 rounded-full top-1/2 transform -translate-y-1/2" />

            {/* Range Sliders */}
            <input
              type="range"
              min="50"
              max="200"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
              style={{ zIndex: 2 }}
            />
            <input
              type="range"
              min="50"
              max="200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* Price Labels */}
          <div className="flex justify-between mt-2 ABeeZee text-gray-500">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
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
              className={`w-6 h-6 rounded-full cursor-pointer ${color} ${
                selectedColors.includes(color)
                  ? "ring-2 ring-offset-2 ring-gray-300"
                  : ""
              }`}
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
              className={`px-3 py-1 ABeeZee bg-gray-100 rounded-full cursor-pointer ${
                selectedSizes.includes(size)
                  ? "bg-gray-200"
                  : "hover:bg-gray-200"
              }`}
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-md font-medium mb-4">Style</h3>
        <div className="flex flex-wrap gap-2">
          {styles.map((style: any) => (
            <span
              key={style}
              onClick={() => handleStyleClick(style)}
              className={`px-3 py-1 ABeeZee bg-gray-100 rounded-full cursor-pointer ${
                selectedStyles.includes(style)
                  ? "bg-gray-200"
                  : "hover:bg-gray-200"
              }`}
            >
              {style}
            </span>
          ))}
        </div>
      </div>
      {/* Apply Filter Button */}
      <button
        onClick={handleApplyFilters}
        className="mt-4 w-full bg-black text-white py-2 rounded-full"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default CategoryFilter;
