'use client';

import React, { useState } from 'react';

const ProductForm = () => {
  const [productData, setProductData] = useState({
    category: 'newArrivals', // Default category
    name: '',
    price: '',
    rating: '',
    sizes: '',
    colors: '',
    image: null
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (e:any) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Prepare the product data
    const newProduct = {
      id: Date.now(), // Unique ID
      name: productData.name,
      image: '/placeholder.png', // Placeholder for now (you'll replace this with actual image upload logic)
      rating: parseFloat(productData.rating),
      price: parseFloat(productData.price),
      sizes: productData.sizes.split(',').map((size) => size.trim()),
      colors: productData.colors.split(',').map((color) => color.trim())
    };

 

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="p-3 border rounded-md mt-2"
          >
            <option value="newArrivals">New Arrivals</option>
            <option value="topSelling">Top Selling</option>
          </select>
        </div>

        {/* Product Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="p-3 border rounded-md mt-2"
            required
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-medium text-gray-700">Price ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="p-3 border rounded-md mt-2"
            required
          />
        </div>

        {/* Rating */}
        <div className="flex flex-col">
          <label htmlFor="rating" className="text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={productData.rating}
            onChange={handleChange}
            className="p-3 border rounded-md mt-2"
            required
            step="0.1"
            max="5"
          />
        </div>

        {/* Sizes */}
        <div className="flex flex-col">
          <label htmlFor="sizes" className="text-sm font-medium text-gray-700">Sizes (comma-separated)</label>
          <input
            type="text"
            id="sizes"
            name="sizes"
            value={productData.sizes}
            onChange={handleChange}
            className="p-3 border rounded-md mt-2"
            placeholder="e.g., Small, Medium, Large"
            required
          />
        </div>

        {/* Colors */}
        <div className="flex flex-col">
          <label htmlFor="colors" className="text-sm font-medium text-gray-700">Colors (comma-separated)</label>
          <input
            type="text"
            id="colors"
            name="colors"
            value={productData.colors}
            onChange={handleChange}
            className="p-3 border rounded-md mt-2"
            placeholder="e.g., Red, Blue, Green"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageUpload}
            className="p-3 border rounded-md mt-2"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
