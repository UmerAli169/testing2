'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { StarIcon } from 'lucide-react';
import { generateClient } from 'aws-amplify/api';
import { listAddProducts } from '@/graphql/queries';
import { MoreHorizontalIcon, TrashIcon } from 'lucide-react';
import Link from 'next/link';
import { deleteAddProduct } from '@/graphql/mutations';
import NameDetails from '@/components/productPage/NameDetails';
import Reviewss from '@/components/productPage/Reviewss';

const ProductDetails = () => {
  const [topSelling, setTopSelling] = useState<any[]>([]);
  const client = generateClient();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<string | null>(null); // For tracking open menu for each product

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.graphql({ query: listAddProducts });
        const products = result.data.listAddProducts.items;
        setTopSelling(products); // Set the fetched products to state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const ProductCard = ({ product, onClick, onDelete }: any) => (


   
    <div
      className='max-w-[296px] max-height-[444px] mt-[30px] rounded-lg p-4 cursor-pointer relative'
      onClick={onClick}
    >
      {/* Ellipsis (More Options) Icon */}
      <button
        className='absolute top-2 right-4 text-gray-600 p-2 rounded-full z-10'
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering onClick of the card
          setMenuOpen(menuOpen === product.id ? null : product.id); // Toggle menu visibility
        }}
      >
        <MoreHorizontalIcon className='w-5 h-5 text-gray-600 z-10' />
      </button>

      {menuOpen === product.id && (
        <div className='absolute top-10 right-2 bg-white border border-gray-300 rounded-lg shadow-md w-36 z-10'>
          <ul>
            <li className='ABeeZee px-2 py-2 cursor-pointer hover:bg-gray-100' onClick={() => onDelete(product.id)}>
              Delete
            </li>
            <li className='ABeeZee px-2 py-2 cursor-pointer hover:bg-gray-100' onClick={() => setMenuOpen(null)}>
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
          accessLevel='guest'
        />
      </div>

      {/* Product Name */}
      <h3 className='text-sm font-medium mb-2'>{product.productName}</h3>

      {/* Rating */}
      <div className='flex items-center gap-1'>
        {[...Array(5)].map((_, index) => (
          <div className='relative w-[18.49px] h-[18.49px]' key={index}>
            {/* Empty star */}
            <StarIcon className='absolute inset-0 w-full h-full text-gray-300' />
            {/* Filled star based on rating */}
            <div
              className='absolute inset-0 w-full h-full overflow-hidden'
              style={{
                width: `${(product.rating || 4) >= index + 1 ? '100%' : '0%'}`, // Fill based on the rating
              }}
            >
              <StarIcon className='w-full h-full text-[#FFC633]' />
            </div>
          </div>
        ))}
        <span className='ABeeZee lg:text-[14px] sm:text-[12px] text-gray-600 ml-1'>
          {product.rating ? `${product.rating}/5` : '4.5/5'}
        </span>
      </div>

      {/* Price Section with Discount */}
      <div className='flex items-center gap-2 mb-2'>
        {product.discountedPrice ? (
          <>
            <span className='text-[22px] lg:text-[24px] sm:text-[20px]'>${product.discountedPrice}</span>
            <span className='text-gray-400 line-through text-[20px]'>${product.price}</span>
            <p className='bg-red-300/20 text-[12px] rounded-2xl'>-{product.discountValue}%</p>
          </>
        ) : (
          <span className='text-[22px] lg:text-[24px] sm:text-[20px]'>${product.price}</span>
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


    <div className='mx-auto'>
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
 
    <NameDetails/>
    <Reviewss/>

    
      <h2 className='flex justify-center text-[48px] pt-[25px] w-full font-ABeeZee'>You might also like</h2>
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
