'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { Trash2, ChevronRight } from 'lucide-react';
import { deleteCartItem, updateCartItem } from '@/graphql/mutations';
import { listCartItems } from '@/graphql/queries';
import { generateClient } from 'aws-amplify/api';
import { StorageImage } from '@aws-amplify/ui-react-storage';
const accessLevel: any = 'guest';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [promoCode, setPromoCode] = useState('');
  const client = generateClient();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await client.graphql({ query: listCartItems });
        const items = response?.data?.listCartItems?.items || [];
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartData();
  }, []);
  const subtotal = cartItems.reduce((sum, item) => sum + (item?.price || 0) * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;
  const updateQuantity = async (id: string, change: number) => {
    try {
      const updatedItem = cartItems.find((item) => item.id === id);
      if (!updatedItem) return;

      const newQuantity = Math.max(1, updatedItem.quantity + change);
      const response = await client.graphql({
        query: updateCartItem,
        variables: {
          input: {
            id,
            quantity: newQuantity,
          },
        },
      });

      const updatedData = response?.data?.updateCartItem;
      if (updatedData) {
        // Update the state with the new quantity for the specific item
        setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const response = await client.graphql({
        query: deleteCartItem,
        variables: {
          input: {
            id,
          },
        },
      });

      if (response?.data?.deleteCartItem) {
        setCartItems((items) => items.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='mb-6 font-ABeeZee flex items-center'>
        <span>Home</span>
        <img src='/svgs/productTopBar/replaceOFSlash.svg' alt='Slash' className='w-[6px] mx-1' />
        <span>Cart</span>
      </div>

      <h1 className='text-[38px] sm:text-[40px] lg:text-[47px] font-ABeeZee mb-6'>Your cart</h1>

      <div className='grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-4'>
        <div className='overflow-y-auto leading-[20px] max-h-[508px] border max-w-[715px] p-2 rounded-lg border-gray-300'>
          {cartItems.slice(0, 3).map((item, index) => (
            <div key={item.id}>
              {index !== 0 && <div className='w-[667px] border-t border-gray-300 my-2'></div>}

              <div className='flex items-center gap-4 p-2 rounded-lg'>
                <StorageImage
                  path={`public/${item.imageKeys || ''}`}
                  alt={item.productName || 'Product'}
                  accessLevel={accessLevel as any | undefined} // Type assertion
                  className='lg:w-[124px] lg:h-[124px] sm:w-[120px] sm:h-[120px] w-[99px] h-[99px] object-cover  rounded-md'
                />

                <div className='flex-grow'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-ABeeZee lg:text-[18px] sm:text-[16px] text-[20px]'>
                      {item.productName || 'Product Name'}
                    </h3>
                    <button onClick={() => deleteItem(item.id)} className='text-red-500'>
                      <img src='/svgs/cartPage/delete.svg' alt='Close' className='w-[16px] lg:w-[18px] sm:w-[20px]' />
                    </button>
                  </div>
                  <div className='font-ABeeZee lg:text-[12px] sm:text-[10px] text-[14px] text-gray-600 mb-2'>
                    <div>Size: {item?.size?.[0] || 'N/A'}</div>
                    <div>Color: {item?.color?.[0] || 'N/A'}</div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='font-ABeeZee lg:text-[20px] sm:text-[18px] text-[24px]'>
                      ${(item?.price || 0) * item.quantity}
                    </div>
                    <div className='flex items-center gap-3 bg-[#F0F0F0] rounded-full border px-4 py-2'>
                      <button onClick={() => updateQuantity(item.id, -1)} className='text-gray-500 hover:text-black'>
                        <img
                          src='/svgs/cartPage/minus.svg'
                          alt='Close'
                          className='w-[15.63px] lg:w-[14px] sm:w-[16px]'
                        />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className=' hover:text-black'>
                        <img
                          src='/svgs/cartPage/plus.svg'
                          alt='Close'
                          className='w-[15.63px] lg:w-[14px] sm:w-[16px]'
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=' border border-gray-300  w-[505px] max-h-[458px] rounded-lg p-6 '>
          <h2 className=' lg:text-[20px] sm:text-[18px] text-[24px] font-ABeeZee mb-6'>Order Summary</h2>
          <div className='space-y-4 mb-6'>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between '>
              <span>Discount (-20%)</span>
              <span className=' text-red-500'>-${discount.toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className='flex justify-between font-ABeeZee pt-4 border-t'>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='relative flex items-center w-full'>
              <img src='/svgs/cartPage/tag.svg' alt='Tag' className='absolute left-4 w-[16px] text-gray-500' />

              <input
                type='text'
                placeholder='Add promo code'
                className='flex-grow pl-10 pr-4 py-2 rounded-full border bg-[#F0F0F0] font-ABeeZee border-gray-300'
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />

              <button className='bg-black text-white px-6 py-2 rounded-full ml-2'>Apply</button>
            </div>

            <button className='w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-2'>
              Go to Checkout
              <img src='/svgs/cartPage/allow.svg' alt='Arrow' className='w-[16px]' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
