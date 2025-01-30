'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import Header from './Header';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import Link from 'next/link';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  const currentSession = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        setUserInfo(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoggedIn(false);
    }
  };

   useEffect(() => {
    currentSession(); // Check for existing session on page load
  }, []);

  const handleNavigate = (path: string) => {
    setIsDropdownOpen(false);
    router.push(path);
  };

  const handleLogout = async () => {
    try {
      await signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }

    setIsLoggedIn(false);
    setUserInfo(null);
  };

  return (
    <div>
      <Header />
      <nav className='bg-white py-4 border-b relative gap-[40] px-1 md:px-1 lg:px-3 xl:px-20 '>
        <div className='mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden'>
                {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
              </button>
              <div className='abeezee text-[32px] font-normal leading-[37.82px]  text-left w-[160px] h-[39px] text-black'>
                SHOP.CO
              </div>
            </div>
            
            <div className='hidden lg:flex gap-[14px]'>
              <button className='abeezee text-[16px] leading-[18.91px] text-black flex items-center gap-1'>
                Shop <ChevronDown className='w-4 h-4' />
              </button>
              <Link href='/' className='abeezee text-[16px] leading-[18.91px] text-black decoration-black'>
                On Sale
              </Link>
              <Link href='#' className='abeezee text-[16px] leading-[18.91px] text-black decoration-black'>
                New Arrivals
              </Link>
              <Link href='#' className='abeezee text-[16px] leading-[18.91px] text-black decoration-black'>
                Brands
              </Link>
              <button
                onClick={() => handleNavigate('/addDataForm')}
                className='abeezee text-[16px] leading-[18.91px] cursor-pointer text-black decoration-black'
              >
                Add Product
              </button>
            </div>

            <div className='hidden lg:flex items-center px-1 py-1 max-w-[558px] h-[48px] border-[1px] rounded-full bg-[#F0F0F0] '>
              <img src='/svgs/navbar/search.svg' className='w-[20.27px] h-[20.27px]' />
              <input
                type='text'
                placeholder='Search for products...'
                className='  outline-none w-full bg-[#F0F0F0] '
              />
            </div>

            {!isLoggedIn && (
              <div className='flex space-x-4'>
                <button onClick={() => handleNavigate('/auth/login')} className='text-black'>
                  Login
                </button>
                <button onClick={() => handleNavigate('auth/signup')} className='text-black'>
                  Sign Up
                </button>
              </div>
            )}

            {isLoggedIn && userInfo && (
              <div className='flex items-center space-x-4 '>
                              <img src='/svgs/navbar/search.svg' className='w-[20.27px] h-[20.27px] lg:hidden' />

                <img
                  src='/svgs/navbar/cart.svg'
                  alt=''
                  className='h-[20.25px] w-[22.13px]'
                  onClick={() => handleNavigate('/cartPage')}
                />
                <div className='relative'>
                  <button className='cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src='/svgs/navbar/account.svg' alt='' className='h-[20.25px] w-[20.25px]' />
                  </button>

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
                        <li>
                          <button
                            onClick={handleLogout}
                            className='w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg'
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
