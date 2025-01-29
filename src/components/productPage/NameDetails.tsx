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
  const [showMessage, setShowMessage] = useState(false);
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
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);

      const currentUser = await getCurrentUser();
      const userId = currentUser.userId;
      if (!product) return;

      const totalPrice = product.price * quantity;

      const result = await client.graphql({
        query: createCartItem,
        variables: {
          input: {
            productName: product.productName,
            quantity: quantity,
            price: totalPrice,
            size: selectedSize ? [selectedSize] : [],
            color: selectedColor ? [selectedColor] : [],
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

  const renderRatingStars = (rating: number = 0) => (
    <div className='flex items-center gap-1'>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
        />
      ))}
      <span className='text-sm text-gray-600 ml-1'>{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <div className='mx-auto'>
      {showMessage && (
        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg'>
          Product added to cart!
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2 bg-[#F0EEED]'>
            {product?.imageKeys?.slice(0, 3).map((img: string, index: number) => (
              <StorageImage
                key={index}
                path={`public/${img}`}
                className='w-20 h-40 rounded-md object-cover border'
                accessLevel='guest'
              />
            ))}
          </div>
          <div className='flex-1 border rounded-lg overflow-hidden'>
            {product?.imageKeys?.[0] && (
              <StorageImage
                path={`public/${product.imageKeys[0]}`}
                className='w-full h-[580px] object-cover'
                accessLevel='guest'
              />
            )}
          </div>
        </div>

        <div className='px-[16px]'>
          <h1 className='text-2xl font-bold mb-2'>{product?.productName || 'Product Name'}</h1>
          {renderRatingStars(product?.rating ?? 0)}
          <div className='flex items-center gap-4 my-6'>
            <span className='text-2xl font-bold'>${(product?.price || 0) * quantity}</span>

            <span className='flex justify-between rounded-full bg-red-100 px-2 py-1 text-red-500'> -40%</span>
          </div>
          <span className='ABeeZee line-clamp-4 overflow-hidden text-ellipsis mt-4'>{product?.description}</span>

          <div className='w-full border-t border-gray-300'></div>

          <div className='my-6'>
            <h3 className='mb-2 ABeeZee'>Choose Color</h3>
            <div className='flex gap-2'>
              {product?.color?.map((color: string) => (
                <button
                  key={color}
                  className={`px-4 py-2 rounded-full border ${
                    selectedColor === color ? 'bg-black text-white' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className='w-full border-t border-gray-300'></div>

          <div className='mb-6'>
            <h3 className='mb-2 ABeeZee'>Choose Size</h3>
            <div className='flex gap-2'>
              {product?.size?.map((size: string) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize === size ? 'bg-black text-white' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className='w-full border-t border-gray-300 my-5'></div>

          <div className='flex gap-4 mb-8'>
            <div className='flex items-center border border-gray-300 rounded-full'>
              <button className='px-4 py-2' onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                -
              </button>
              <span className='px-4 py-2'>{quantity}</span>
              <button className='px-4 py-2' onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button className='flex-1 bg-black text-white py-2 rounded-full ABeeZee' onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameDetails;
