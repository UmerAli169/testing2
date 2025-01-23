"use client"
import React, { useState } from 'react';
import { Trash2, ChevronRight } from 'lucide-react';
import {cartItemsData} from './data'
const CartPage = () => {
  const [cartItems, setCartItems] = useState(cartItemsData  );
  
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id:any, change:any) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        <span>Home / Cart</span>
      </div>

      <h1 className="text-2xl font-medium mb-8">Your cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <button className="text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <div>Size: {item.size}</div>
                  <div>Color: {item.color}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-medium">${item.price}</div>
                  <div className="flex items-center gap-3 bg-white rounded-full border px-4 py-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-gray-500 hover:text-black"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-gray-500 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-medium mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <div className="flex justify-between font-medium pt-4 border-t">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-grow px-4 py-2 rounded-lg border"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="bg-black text-white px-6 py-2 rounded-lg">
                Apply
              </button>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2">
              Go to Checkout <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CartPage;