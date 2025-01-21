"use client"
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import Header from './Header';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  return (
  <div>
      
      <Header />
     <div className='mycontainer'>
       <nav className="bg-white py-4 border-b relative">
        <div className=" mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="text-xl font-bold">SHOP.CO</div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-6">
              <a href="pages/productPage" className="hover:text-gray-600">Shop</a>
              <a href="pages/catergiesPage" className="hover:text-gray-600">On Sale</a>
              <a href="#" className="hover:text-gray-600">New Arrivals</a>
              <a href="#" className="hover:text-gray-600">Brands</a>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search Icon for Mobile */}
              <Search className="h-6 w-6 lg:hidden" />
              
              {/* Search Bar for Desktop */}
              <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
                <Search className="w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search for products" className="bg-transparent ml-2 outline-none w-full" />
              </div>
              
              <ShoppingCart className="h-6 w-6" />
              <User className="h-6 w-6" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b z-50">
              <div className="flex flex-col py-4">
                <a href="#" className="px-4 py-2 hover:bg-gray-100">Shop</a>
                <a href="#" className="px-4 py-2 hover:bg-gray-100">On Sale</a>
                <a href="#" className="px-4 py-2 hover:bg-gray-100">New Arrivals</a>
                <a href="#" className="px-4 py-2 hover:bg-gray-100">Brands</a>
              </div>
            </div>
          )}
        </div>
      </nav></div>
  </div>
  
    

      
   
   
  );
};

export default Navbar;




