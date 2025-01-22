'use client';
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import Header from './Header';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const router = useRouter(); // Router hook

  const handleNavigate = (path: string) => {
    setIsDropdownOpen(false); // Close the dropdown
    router.push(path); // Navigate to the selected page
  };

  return (
    <div>
      <Header />
      <div className='mycontainer'>
        <nav className='bg-white py-4 border-b relative mx-[100px]'>
          <div className=' mx-auto px-4'>
            <div className='flex items-center justify-between'>
              {/* Mobile menu button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden'>
                {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
              </button>
              <div className='text-xl font-bold sm:flex sm:justify-start sm:w-auto mx-[16px]'>SHOP.CO</div>

              {/* Desktop Navigation Links */}
              <div className='hidden lg:flex space-x-6'>
                <a href='/' className='hover:text-gray-600'>
                  Shop
                </a>
                <a href='/' className='hover:text-gray-600'>
                  On Sale
                </a>
                <a href='#' className='hover:text-gray-600'>
                  New Arrivals
                </a>
                <a href='#' className='hover:text-gray-600'>
                  Brands
                </a>
              </div>

              <div className='flex items-center space-x-4'>
                {/* Search Icon for Mobile */}
                <Search className='h-6 w-6 lg:hidden' />

                {/* Search Bar for Desktop */}
                <div className='hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64'>
                  <Search className='w-4 h-4 text-gray-400' />
                  <input
                    type='text'
                    placeholder='Search for products'
                    className='bg-transparent ml-2 outline-none w-full'
                  />
                </div>

                <img
                  src='/svgs/navbar/cart.svg'
                  alt=''
                  className='h-[20.25px] w-[22.13px] top-[1.88px] '
                  onClick={() => handleNavigate('/cartPage')}
                />

                {/* User Icon with Dropdown */}
                <div className='relative'>
                  <button className='cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img
                      src='/svgs/navbar/account.svg'
                      alt=''
                      className='h-[20.25px] w-[20.25px] top-[1.88px] left-[1.88px] '
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50'>
                      <ul className='space-y-2 p-2'>
                        <li>
                          <button
                            onClick={() => handleNavigate('/accountSettingPage')}
                            className='w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg'
                          >
                            Account Settings
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavigate('/contactForm')}
                            className='w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg'
                          >
                            Contact Form
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className='lg:hidden absolute top-full left-0 right-0 bg-white border-b z-50'>
                <div className='flex flex-col py-4'>
                  <a href='#' className='px-4 py-2 hover:bg-gray-100'>
                    Shop
                  </a>
                  <a href='#' className='px-4 py-2 hover:bg-gray-100'>
                    On Sale
                  </a>
                  <a href='#' className='px-4 py-2 hover:bg-gray-100'>
                    New Arrivals
                  </a>
                  <a href='#' className='px-4 py-2 hover:bg-gray-100'>
                    Brands
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
