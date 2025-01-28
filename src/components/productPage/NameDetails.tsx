'use client';
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { getAddProduct } from '@/graphql/queries'; // Adjust paths
import { createCartItem } from '@/graphql/mutations'; // Adjust paths
import { generateClient } from 'aws-amplify/api';
import { useSearchParams } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';
import { StorageImage } from '@aws-amplify/ui-react-storage';
function NameDetails() {
  const [selectedSize, setSelectedSize] = useState<string[]>([]); // Track multiple selected sizes
  const [selectedColor, setSelectedColor] = useState<string[]>([]); // Track multiple selected colors
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>(null); // State for product details
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');

  const client = generateClient();

  const renderStars = (rating: number) => {
    return (
      <div className='flex gap-0.5'>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : i < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  // Fetch product details, reviews, and related products
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product details
        const productResult = await client.graphql({ query: getAddProduct, variables: { id: productId } });
        console.log(productResult.data.getAddProduct, 'productResult');
        setProduct(productResult.data.getAddProduct);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      const currentUser = await getCurrentUser();
      const userId = currentUser.userId;

      // Ensure the product details are available
      if (!product) {
        return;
      }

      const result = await client.graphql({
        query: createCartItem,
        variables: {
          input: {
            productName: product.productName,
            quantity: quantity,
            price: product.price,
            size: selectedSize,
            color: product.color,
            imageKey: product.imageKey,
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
      <div className='flex items-center gap-2 text-sm mb-8'>
        <span>Home</span>
        <img
          src='/ProductDetails/homeIcone/topsymbol.svg'
          className='p-1 h-[18.75px] w-[21.75px] rounded-full '
          aria-label='Next review'
        />
        <span>Shop</span>
        <img
          src='/ProductDetails/homeIcone/topsymbol.svg'
          className='p-1 h-[18.75px] w-[21.75px] rounded-full '
          aria-label='Next review'
        />
        <span>Men</span>
        <img
          src='/ProductDetails/homeIcone/topsymbol.svg'
          className='p-1 h-[18.75px] w-[21.75px] rounded-full '
          aria-label='Next review'
        />
        <span>T-shirts</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8  '>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2 bg-[#F0EEED] '>
            {product?.imageKeys?.slice(0, 3).map((img: string, index: number) => (
              <StorageImage
                key={index}
                path={`public/${img}`}
                className='w-20 h-40 rounded-md   mix-blend-multiply object-cover cursor-pointer border'
                accessLevel='guest'
              />
            ))}
          </div>

          <div className='flex-1 border rounded-lg object-cover overflow-hidden '>
            {product?.imageKeys?.[0] && (
              <div className='bg-[#F0EEED]'>
                <StorageImage
                  path={`public/${product.imageKeys[0]}`}
                  className='w-full h-[580px] 
                     mix-blend-multiply object-cover'
                  accessLevel='guest'
                />
              </div>
            )}
          </div>
        </div>
        <div className=' px-[16px]  ABeeZee'>
          <h1 className='text-2xl max-w-[449px] max-h-[47px] size-[400px] mb-2'>{product?.name || 'Product Name'}</h1>
          <div className='flex items-center gap-2 mb-4'>
            {renderStars(product?.rating || 0)}
            <span className='text-sm text-gray-600'>{product?.rating || 0}/5</span>
          </div>

          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl font-bold'>${product?.price || '0'}</span>
            {product?.oldPrice && <span className='text-gray-500 line-through'>${product?.oldPrice}</span>}
            {product?.discount && <span className='text-red-500'>-{product?.discount}%</span>}
          </div>

          <p className='text-gray-600 mb-6 ABeeZee'>{product?.description || 'Product description'}</p>
          <div className='w-full border-t border-gray-300 mt-12'></div>

          {/* Size Selection */}
          <div className='mb-6'>
            <h3 className='py-[21px]  mb-2 ABeeZee'>Choose Color</h3>
            <div className='flex gap-2'>
              {product?.color?.map((color: string) => (
                <button
                  key={color}
                  className={`px-4 py-2 rounded-full border ${
                    selectedColor.includes(color) ? 'bg-black text-white' : 'border-gray-300'
                  }`}
                  onClick={() => {
                    if (selectedColor.includes(color)) {
                      setSelectedColor(selectedColor.filter((c) => c !== color));
                    } else {
                      setSelectedColor([...selectedColor, color]);
                    }
                  }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className='w-full border-t border-gray-300 mt-12 '></div>

          {/* Color Selection */}
          <div className='mb-6 ABeeZee'>
            <h3 className='py-[21px] mb-2 ABeeZee'>Choose Size</h3>
            <div className='flex gap-2'>
              {product?.size?.map((size: string) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize.includes(size) ? 'bg-black text-white' : 'border-gray-300'
                  }`}
                  onClick={() => {
                    if (selectedSize.includes(size)) {
                      setSelectedSize(selectedSize.filter((s) => s !== size));
                    } else {
                      setSelectedSize([...selectedSize, size]);
                    }
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className='w-full border-t border-gray-300 my-4 '></div>

          {/* Quantity and Add to Cart */}
          <div className='flex gap-4 mb-8'>
            <div className='flex items-center border border-gray-300 rounded-full'>
              <button className='px-4 py-2' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <span className='px-4 py-2'>{quantity}</span>
              <button className='px-4 py-2' onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button
              className='flex-1 bg-black text-white py-2 max-w-[400px] max-h-[52px] rounded-full'
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameDetails;
