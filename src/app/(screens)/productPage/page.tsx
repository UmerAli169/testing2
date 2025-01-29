'use client';

import { useEffect, useState } from 'react';
import NewArrivals from '@/components/homeComponents/NewArrivals';
import NameDetails from '@/components/productPage/nameDetails';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { StarIcon } from 'lucide-react';
import { listAddProducts } from '@/graphql/queries';
import { generateClient } from 'aws-amplify/api';
import Reviewss from '@/components/productPage/Reviewss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ProductDetails = () => {
  const [topSelling, setTopSelling] = useState<any[]>([]);
  const client = generateClient();
  const router = useRouter();

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
  }, []); // Empty dependency array ensures it runs once on mount

  const renderRatingStars = (rating: any) => (
    <div className='flex items-center gap-1'>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className='text-sm text-gray-600 ml-1'>{rating}</span>
    </div>
  );

  const ProductCard = ({ product, onClick }: any) => (
    <div
      className='max-w-[268px] max-height-[402px] rounded-lg p-4 transition-shadow duration-200 hover:shadow-lg'
      onClick={onClick} // Ensure the onClick is correctly handled here
    >
      <div className='relative aspect-square bg-[#F0EEED] mb-4'>
        <StorageImage
          path={`public/${product.imageKeys?.[0]}`} // Use the first image in the array
          alt={product.productName}
          className='w-full h-full object-cover rounded-md mix-blend-multiply'
          accessLevel='guest'
        />
      </div>
      <h3 className='text-sm font-medium mb-2'>{product.productName}</h3>
      {renderRatingStars(product.rating)}
      <div className='flex items-center gap-2 mb-2'>
        <span className='text-lg font-bold'>${product.price}</span>
      </div>
    </div>
  );

  const handleClick = (productId: string) => {
    router.push(`/productPage/?productId=${productId}`);
    console.log('Product clicked:', productId);
  };

  return (
    <div className='mx-auto'>
                  <div className='w-full border-t border-gray-300 '></div>

      <div className="flex items-center space-x-2 text-sm text-gray-500 py-5">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <img
          src="/svgs/productTopBar/replaceOFSlash.svg"
          alt="Close"
          className="w-[6px] "
        />
          <Link href="/shop" className="hover:text-gray-700">
            Shop
          </Link>
          <img
          src="/svgs/productTopBar/replaceOFSlash.svg"
          alt="Close"
             className="w-[6px] "
        />
          <Link href="/shop/men" className="hover:text-gray-700">
            Men
          </Link>
          <img
          src="/svgs/productTopBar/replaceOFSlash.svg"
          alt="Close"
           className="w-[6px] "
        />
          <span className="text-gray-900">T-shirts</span>
        </div>
    
      
      <NameDetails />

      <Reviewss />

      <h2 className='flex justify-center text-[48px] pt-[25px] w-full ABeeZee '>You might also like </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 py-[48px] gap-6'>
        {topSelling.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)} // Pass onClick here
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
