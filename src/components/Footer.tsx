'use client';
import React from 'react';
import { footerImages, footerLinks } from './data';
import Link from 'next/link';
import { Mail } from 'lucide-react';
const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className='flex justify-center items-center'>


      
      <div className='bg-black rounded-xl max-w-[1300px] text-white mt-20  py-[22px]  pl-[80px] '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full '>
          <div className='flex items-center w-full'>
            <h2 className='  mb-4 w-max-[551px]   left-164px] ABeeZee text-[40px] leading-[56.74px] '>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>

          <div className='flex flex-col gap-4  w-[1240]  m-auto'>
            <div className='relative '>
              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='email'
                placeholder='Enter your email address'
                className=' w-full pl-10 pr-4 py-2 rounded-full bg-white border min-w-[340px] border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30'
              />
            </div>

            <button className=' px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 whitespace-nowrap min-w-[340px]'>
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div></div>

      <div className=' flex flex-col  ABeeZee'>
        <footer className='bg-[#F2F0F1] pt-16 pb-8 px-4 md:px-8 mt-auto'>
          <div className=' mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
              <div className='md:col-span-1'>
                <h2 className='text-xl  mb-4 ABeeZee'>SHOP.CO</h2>
                <p className='text-gray-600 text-sm mb-6'>
                  We have clothes that suit your style and which you're proud to wear. From women to men.
                </p>
               
              </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:col-span-4'>
                <div>
                  <h3 className='text-sm  text-gray-900 uppercase mb-4'>COMPANY</h3>
                  <ul className='space-y-2'>
                    {footerLinks.company.map((link:any) => (
                      <li key={link.name}>
                        <Link href={link.href} className='text-sm text-gray-600 hover:text-gray-900'>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-sm  text-gray-900 uppercase mb-4'>HELP</h3>
                  <ul className='space-y-2'>
                    {footerLinks.help.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className='text-sm text-gray-600 hover:text-gray-900'>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-sm  text-gray-900 uppercase mb-4'>FAQ</h3>
                  <ul className='space-y-2'>
                    {footerLinks.faq.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className='text-sm text-gray-600 hover:text-gray-900'>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-sm  text-gray-900 uppercase mb-4'>RESOURCES</h3>
                  <ul className='space-y-2'>
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className='text-sm text-gray-600 hover:text-gray-900'>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='w-full border-t border-gray-300 mt-12'></div>

            {/* Bottom Section */}
            <div className='ABeeZee border-t border-gray-200'>
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