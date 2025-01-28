'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { generateClient } from 'aws-amplify/api';
import { listAddProducts } from '@/graphql/queries';
import { setNewArrivals, setTopSelling } from '../../app/Redux/features/products/productsSlice';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { StarIcon } from 'lucide-react';

function NewArrivals() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const router = useRouter();
  const client = generateClient();
  const dispatch = useDispatch();
  const { newArrivals, topSelling } = useSelector((state: any) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.graphql({ query: listAddProducts });
        const products = result.data.listAddProducts.items;

        const newArrivalsData = products.filter((product: any) => product.category === 'newArrivals');
        const topSellingData = products.filter((product: any) => product.category === 'topSelling');

        dispatch(setNewArrivals(newArrivalsData.slice(0, 4)));
        dispatch(setTopSelling(topSellingData.slice(0, 4)));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleClick = (productId: string) => {
    router.push(`/productPage/?productId=${productId}`);
  };

  const ProductCard = ({ product, onClick }: any) => (
    <div
      className='bg-[#F0EEED] max-w-[268px] max-height-[402px] rounded-lg p-4 transition-shadow duration-200 hover:shadow-lg'
      onClick={onClick} // Ensure the onClick is correctly handled here
    >
      <div className='relative aspect-square mb-4'>
        <StorageImage
          path={`public/${product.imageKey}`} // Use path instead of imgKey
          alt={product.productName}
          className='w-full h-full object-cover rounded-md'
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

  return (
    <>
      <h2 className='flex justify-center text-[48px] py-[35px] w-full ABeeZee '>New Arrivals</h2>

      <div className='grid grid-cols-2 py-[48px] md:grid-cols-4 gap-2 min-w-[296px] min-height-[444px]'>
        {newArrivals.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)} // Pass onClick here
          />
        ))}
      </div>
      <div className="flex justify-center py-[16px]">
  <button className="w-full sm:w-auto h-[52px] border border-gray-300 bg-[#F2F0F1] text-black px-[54px] py-[16px] rounded-[62px]">
    View All
  </button>
</div>


      <h2 className='flex justify-center text-[48px] pt-[25px] w-full ABeeZee '>top Selling</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 py-[48px] gap-6'>
        {topSelling.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)} // Pass onClick here
          />
        ))}
      </div>
      <div className="flex justify-center py-[16px]">
  <button className="w-full sm:w-auto h-[52px] border border-gray-300 bg-[#F2F0F1] text-black px-[54px] py-[16px] rounded-[62px]">
    View All
  </button>
</div>

    </>
  );
}

export default NewArrivals;
