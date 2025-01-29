'use client';
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { getAddProduct } from '@/graphql/queries';
import { createCartItem } from '@/graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { useSearchParams } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';
import { StorageImage } from '@aws-amplify/ui-react-storage';

function NameDetails() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>(null);
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const client = generateClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResult = await client.graphql({ query: getAddProduct, variables: { id: productId } });
        setProduct(productResult.data.getAddProduct);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchData();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      const currentUser = await getCurrentUser();
      const userId = currentUser.userId;
  
      if (!product) return;
  console.log(product.imageKeys?.[0],'product.imageKeys?.[0]')
      const totalPrice = product.price * quantity; // Calculate price before sending
  
      const result = await client.graphql({
        query: createCartItem,
        variables: {
          input: {
            productName: product.productName,
            quantity: quantity,
            price: totalPrice, // Send the calculated price
            size: selectedSize.length > 0 ? selectedSize : [],
            color: selectedColor.length > 0 ? selectedColor : [],
            imageKeys: product.imageKeys?.[0],
            userId: userId,
            productId: product.id,
          },
        },
      });
  
      console.log('Added to cart result:', result);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  

  return (
    <div className='mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2 bg-[#F0EEED]'>
            {product?.imageKeys?.slice(0, 3).map((img: string, index: number) => (
              <StorageImage key={index} path={`public/${img}`} className='w-20 h-40 rounded-md object-cover border' accessLevel='guest' />
            ))}
          </div>
          <div className='flex-1 border rounded-lg overflow-hidden'>
            {product?.imageKeys?.[0] && (
              <StorageImage path={`public/${product.imageKeys[0]}`} className='w-full h-[580px] object-cover' accessLevel='guest' />
            )}
          </div>
        </div>
        <div className='px-[16px]'>
          <h1 className='text-2xl font-bold mb-2'>{product?.name || 'Product Name'}</h1>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl font-bold'>${(product?.price || 0) * quantity}</span>
            {product?.oldPrice && <span className='text-gray-500 line-through'>${product.oldPrice}</span>}
            {product?.discount && <span className='text-red-500'>-{product.discount}%</span>}
          </div>

          <div className='mb-6'>
            <h3 className='mb-2'>Choose Color</h3>
            <div className='flex gap-2'>
              {product?.color?.map((color: string) => (
                <button key={color} className={`px-4 py-2 rounded-full border ${selectedColor === color ? 'bg-black text-white' : 'border-gray-300'}`} onClick={() => setSelectedColor(color)}>
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='mb-2'>Choose Size</h3>
            <div className='flex gap-2'>
              {product?.size?.map((size: string) => (
                <button key={size} className={`px-4 py-2 rounded-full border ${selectedSize === size ? 'bg-black text-white' : 'border-gray-300'}`} onClick={() => setSelectedSize(size)}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className='flex gap-4 mb-8'>
            <div className='flex items-center border border-gray-300 rounded-full'>
              <button className='px-4 py-2' onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
              <span className='px-4 py-2'>{quantity}</span>
              <button className='px-4 py-2' onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
            <button className='flex-1 bg-black text-white py-2 rounded-full' onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameDetails;
