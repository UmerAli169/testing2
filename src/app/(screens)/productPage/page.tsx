'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { Star } from 'lucide-react';
import { generateClient } from 'aws-amplify/api';
import { listAddProducts } from '@/graphql/queries';
import { MoreHorizontalIcon } from 'lucide-react';
import Link from 'next/link';
import { deleteAddProduct } from '@/graphql/mutations';
import NameDetails from '@/components/productPage/NameDetails';
import Reviewss from '@/components/productPage/Reviewss';

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const [topSelling, setTopSelling] = useState<any[]>([]);
  const client = generateClient();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const productId = searchParams.get('productId') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.graphql({ query: listAddProducts });
        const products = result.data.listAddProducts.items;
        setTopSelling(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  const getAverageRating = (product: any) => {
    if (!product?.Reviews?.items || product.Reviews.items.length === 0) return 0;
  
    const total = product.Reviews.items.reduce((sum: any, review: any) => sum + review.rating, 0);
    const average = total / product.Reviews.items.length;
  
    return parseFloat(average.toFixed(1));
  };
  
  const ProductCard = ({ product, onClick, onDelete }: any) => (
    <div
      className='  max-w-[296px] max-height-[444px] mt-[30px] rounded-lg p-4 cursor-pointer relative'
      onClick={onClick}
    >
      <button
        className='absolute top-2 right-4 text-gray-600 p-2 rounded-full z-10'
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(menuOpen === product.id ? null : product.id);
        }}
      >
        <MoreHorizontalIcon className='w-5 h-5 text-gray-600 z-10' />
      </button>

      {menuOpen === product.id && (
        <div className='absolute top-10 right-2 bg-white border border-gray-300 rounded-lg shadow-md w-36 z-10'>
          <ul>
            <li className='font-ABeeZee px-2 py-2 cursor-pointer hover:bg-gray-100' onClick={() => onDelete(product.id)}>
              Delete
            </li>
            <li className='font-ABeeZee px-2 py-2 cursor-pointer hover:bg-gray-100' onClick={() => setMenuOpen(null)}>
              Cancel
            </li>
          </ul>
        </div>
      )}

      {/* Image */}
      <div className='relative aspect-square bg-[#F0EEED] mb-4'>
        <StorageImage
          path={`public/${product.imageKeys?.[0]}`}
          alt={product.productName}
          className='w-full h-full object-cover rounded-md mix-blend-multiply'
          accessLevel={'guest' as any}
        />
      </div>

      <h3 className='text-sm font-medium mb-2'>{product.productName}</h3>

      <div className='flex items-center gap-1'>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className='h-4 w-4'
            color={i < (product?.rating ?? 0) ? '#FACC15' : '#D1D5DB'}
            fill={i < (product?.rating ?? 0) ? '#FACC15' : 'none'}
          />
        ))}

        <span className='font-ABeeZee lg:text-[14px] sm:text-[12px] text-gray-600 ml-1'>
          {getAverageRating(product) ?? 0}/5
        </span>
      </div>

      <div className='flex items-center gap-2 mb-2'>
        {product.discountedPrice ? (
          <>
            <span className='text-[10px] lg:text-[12px] sm:text-[8px]'>${product.discountedPrice}</span>
            <span className='text-gray-400 line-through text-[10px] lg:text-[12px] sm:text-[8px]'>
              ${product.price}
            </span>
            <p className='bg-red-300/20 text-[10px] lg:text-[12px] sm:text-[8px] rounded-2xl'>
              -{product.discountValue}%
            </p>
          </>
        ) : (
          <span className='text-[10px] lg:text-[12px] sm:text-[8px]'>${product.price}</span>
        )}
      </div>
    </div>
  );

  const handleClick = (productId: string) => {
    router.push(`/productPage/?productId=${productId}`);
  };

  const handleDelete = async (productId: string) => {
    try {
      // Call the GraphQL mutation to delete the product
      const result = await client.graphql({
        query: deleteAddProduct,
        variables: {
          input: { id: productId }, // Wrap the productId in an input object
        },
      });

      // After successful deletion, remove the product from state
      if (result.data.deleteAddProduct) {
        setTopSelling((prevProducts) => prevProducts.filter((product) => product.id !== productId));
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className=' mx-[100px]'>
      <div className='w-full border-t border-gray-300'></div>

      <div className='flex items-center space-x-2 text-sm text-gray-500 py-5'>
        <Link href='/' className='hover:text-gray-700'>
          Home
        </Link>
        <img src='/svgs/productTopBar/replaceOFSlash.svg' alt='Close' className='w-[6px]' />
        <Link href='/shop' className='hover:text-gray-700'>
          Shop
        </Link>
        <img src='/svgs/productTopBar/replaceOFSlash.svg' alt='Close' className='w-[6px]' />
        <Link href='/shop/men' className='hover:text-gray-700'>
          Men
        </Link>
        <img src='/svgs/productTopBar/replaceOFSlash.svg' alt='Close' className='w-[6px]' />
        <span className='text-gray-900'>T-shirts</span>
      </div>
      {productId && <NameDetails productId={productId} />}
      {productId && <Reviewss productId={productId} />}

      <h2 className='flex justify-center text-[48px] pt-[25px] w-full ABeeZee'>You might also like</h2>
      <div className='grid grid-cols-2  md:grid-cols-4   lg:mx-[100px] sm:mx-[20px] '>
        {topSelling.slice(0, 4).map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
