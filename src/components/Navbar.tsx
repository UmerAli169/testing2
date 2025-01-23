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
      <nav className='bg-white max-[1240px]  py-4 border-b relative mx-[100px] gap-[40]  bg-[#F2F0F1]'>
        <div className=' mx-auto px-4'>
          <div className='flex items-center justify-between'>
            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden'>
              {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
            <div className='  abeezee text-[32px] font-normal leading-[37.82px] text-left w-[160px] h-[39px] text-black '>
              SHOP.CO
            </div>

            {/* Desktop Navigation Links */}
            <div className='hidden lg:flex gap-[24px] '>
              <a
                href='/'
                className='abeezee text-[16px]  leading-[18.91px] text-black   decoration-black w-[38px] h-[19px]'
              >
                Shop
              </a>
              <a
                href='/'
                className='abeezee text-[16px]  leading-[18.91px] text-black  decoration-black w-[60px] h-[19px] '
              >
                On Sale
              </a>
              <a
                href='#'
                className='abeezee text-[16px]  leading-[18.91px] text-black  decoration-black w-[97px] h-[19px] '
              >
                New Arrivals
              </a>
              <a
                href='#'
                className='abeezee text-[16px]  leading-[18.91px] text-black  decoration-black w-[53px] h-[19px] '
              >
                Brands
              </a>
            </div>

            {/* Search Icon for Mobile */}

            {/* Search Bar for Desktop */}
            <div className='  hidden lg:flex items-center   rounded-lg  px-1 py-1 w-[558px] h-[48px]'>
              <img src='/svgs/navbar/search.svg' className=' w-[20.27px] h-[20.27px] top-[1.88px] left-[1.88px]' />
              <input type='text' placeholder='Search for products...' className=' ml-2 outline-none w-full' />
            </div>

            <div className='flex items-center space-x-4 '>
              <img
                src='/svgs/navbar/search.svg'
                className='w-[20.27px] h-[20.27px] top-[1.88px] left-[1.88px] lg:hidden'
              />

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
  );
};

export default Navbar;
