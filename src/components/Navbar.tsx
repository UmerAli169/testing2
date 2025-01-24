'use client';
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import Header from './Header';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

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

  const handleLogout = async() => {
  
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
      <nav className='bg-white  py-4 border-b relative  gap-[40] bg-[#F2F0F1]'>
        <div className=' mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden'>
              {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
            <div className='abeezee text-[32px] font-normal leading-[37.82px] text-left w-[160px] h-[39px] text-black'>
              SHOP.CO
            </div>

            <div className='hidden lg:flex gap-[24px]'>
              <a href='/' className='abeezee text-[16px] leading-[18.91px] text-black decoration-black'>
                Shop
              </a>
              <a href='/' className='abeezee text-[16px] leading-[18.91px] text-black decoration-black'>
                On Sale
              </a>
              <a href='#' className='abeezee text-[16px] leading-[18.91px] text-black decoration-black'>
                New Arrivals
              </a>
              <a href='#' className='abeezee text-[16px] leading-[18.91px]  text-black decoration-black'>
                Brands
              </a>
              <a onClick={() => handleNavigate('/addDataForm')} className='abeezee text-[16px] leading-[18.91px]  cursor-pointer text-black decoration-black'>
             Add Product
              </a>
            </div>

            <div className='hidden lg:flex items-center rounded-lg px-1 py-1 w-[258px] h-[48px] '>
              <img src='/svgs/navbar/search.svg' className='w-[20.27px] h-[20.27px]' />
              <input type='text' placeholder='Search for products...' className='ml-2 outline-none w-full' />
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
              <div className='flex items-center space-x-4'>
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
