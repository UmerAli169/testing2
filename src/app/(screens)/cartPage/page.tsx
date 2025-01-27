"use client";
import React, { useState, useEffect } from "react";
import { Trash2, ChevronRight } from "lucide-react";
import { deleteCartItem, updateCartItem } from "@/graphql/mutations"; // Correct mutations for CartItem
import { listCartItems } from "@/graphql/queries"; // Correct query for CartItem
import { generateClient } from "aws-amplify/api";
import { StorageImage } from "@aws-amplify/ui-react-storage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const client = generateClient();

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartData = async () => {
      console.log("Fetching cart data...");
      try {
        const response = await client.graphql({ query: listCartItems });
        console.log(response, 'response');
        const items = response?.data?.listCartItems?.items || [];
        setCartItems(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartData();
  }, []);

  // Update quantity
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
        setCartItems((items) =>
          items.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Delete item
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
        // Remove the item from the state after successful deletion
        setCartItems((items) => items.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );
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
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
               <StorageImage
                        path={`public/${item.product?.imageKey || "default-product.png"}`} 
                        alt={item.product?.productName || "Product"}                   
                        accessLevel='guest'
                        className='w-full h-full object-cover rounded-md'
                    />
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">
                    {item.product?.productName || "Product Name"}
                  </h3>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <div>Size: {item.product?.size || "N/A"}</div>
                  <div>Color: {item.product?.color || "N/A"}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-medium">${item.product?.price}</div>
                  <div className="flex items-center gap-3 bg-white rounded-full border px-4 py-2">
                    <button
                      onClick={() => updateQuantity(item?.id, -1)}
                      className="text-gray-500 hover:text-black"
                    >
                      -
                    </button>
                    <span>{item?.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item?.id, 1)}
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
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium pt-4 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
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
