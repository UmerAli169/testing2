'use client';
import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { footerImages, footerLinks } from './data';
const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className='bg-black rounded-xl p-6 text-white mt-20 mb-16 py-[32px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          {/* Grid item for text */}
          <div className='flex items-center w-full '>
            <h2 className='  mb-4 w-[551px]   left-100px] ABeeZee text-[40px] leading-[56.74px] '>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>

          {/* Grid item for input fields */}
          <div className='flex flex-col gap-4  w-[1240]  m-auto'>
            {/* Email input with icon */}
            <div className='relative '>
              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='email'
                placeholder='Enter your email address'
                className='block w-full pl-10 pr-4 py-2 rounded-full bg-white border w-[340px] border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30'
              />
            </div>

            {/* Subscribe Button */}
            <button className='block px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 whitespace-nowrap w-[340px]'>
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className=' flex flex-col'>
        <footer className='bg-[#F2F0F1] pt-16 pb-8 px-4 md:px-8 mt-auto'>
          <div className=' mx-auto'>
            {/* Main Footer Content */}
            <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
              {/* Brand Section */}
              <div className='md:col-span-1'>
                <h2 className='text-xl font-bold mb-4'>SHOP.CO</h2>
                <p className='text-gray-600 text-sm mb-6'>
                  We have clothes that suit your style and which you're proud to wear. From women to men.
                </p>
                <div className='flex space-x-4'>
                  <Facebook className='w-5 h-5 text-gray-600' />
                  <Instagram className='w-5 h-5 text-gray-600' />
                  <Youtube className='w-5 h-5 text-gray-600' />
                  <Twitter className='w-5 h-5 text-gray-600' />
                </div>
              </div>

              {/* Links Sections */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:col-span-4'>
                <div>
                  <h3 className='text-sm font-bold text-gray-900 uppercase mb-4'>COMPANY</h3>
                  <ul className='space-y-2'>
                    {footerLinks.company.map((link:any) => (
                      <li key={link.name}>
                        <a href={link.href} className='text-sm text-gray-600 hover:text-gray-900'>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-sm font-bold text-gray-900 uppercase mb-4'>HELP</h3>
                  <ul className='space-y-2'>
                    {footerLinks.help.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className='text-sm text-gray-600 hover:text-gray-900'>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-sm font-bold text-gray-900 uppercase mb-4'>FAQ</h3>
                  <ul className='space-y-2'>
                    {footerLinks.faq.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className='text-sm text-gray-600 hover:text-gray-900'>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-sm font-bold text-gray-900 uppercase mb-4'>RESOURCES</h3>
                  <ul className='space-y-2'>
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className='text-sm text-gray-600 hover:text-gray-900'>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className='mt-12 pt-8 border-t border-gray-200'>
              <div className='flex flex-col md:flex-row justify-between items-center'>
                <p className='text-sm text-gray-600'>Shop.co © 2000-2023. All Rights Reserved</p>
                <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                  {footerImages.map((images, index) => (
                    <div
                      key={index.toString()}
                      className={`relative rounded-lg ${index === 0 || index === 3 ? 'col-span-1' : 'col-span-2'}`}
                    >
                      <img
                        src={images.image}
                        className='w-full h-full max-h-[289px] object-cover object-top rounded-lg'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
