'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { generateClient } from 'aws-amplify/api';
import { listAddProducts } from '@/graphql/queries';
import { setNewArrivals, setTopSelling } from '../../app/Redux/features/products/productsSlice';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { Star } from 'lucide-react';
const ProductCard = ({ product, onClick }: any) => {
  const getAverageRating = () => {
    if (!product?.Reviews?.items || product.Reviews.items.length === 0) return 0;
    const total = product.Reviews.items.reduce((sum: any, review: any) => sum + review.rating, 0);
    const average = total / product.Reviews.items.length;
    return parseFloat(average.toFixed(1));
  };
  return (
    <div className='max-w-[296px] min-height-[444px] cursor-pointer relative  ' onClick={() => onClick(product.id)}>
      <div className='relative aspect-square bg-[#F0EEED] mb-4 rounded-2xl'>
        <StorageImage
          path={`public/${product.imageKeys?.[0]}`}
          alt={product.productName}
          className='w-full h-full object-cover rounded-md '
          accessLevel={'guest' as any}
        />
      </div>

      <h3 className='font-ABeeZee text-[18px] lg:text-[20px] sm:text-[16px] mb-2'>{product.productName}</h3>
      <div className='flex gap-1 mb-2'>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < (getAverageRating() ?? 0) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'
            }
          />
        ))}
      </div>

      <div className='flex font-ABeeZee items-center gap-2 mb-2'>
        {product.discountedPrice ? (
          <>
            <span className='text-[22px] lg:text-[24px] sm:text-[20px] font-ABeeZee '>${product.discountedPrice}</span>
            <span className='text-gray-400 lg:text-[24px] sm:text-[20px] line-through ABeeZee'>${product.price}</span>
            <p className='bg-red-300/20 font-ABeeZee rounded-2xl'>{product.discountValue}%</p>
          </>
        ) : (
          <span className=' font-ABeeZee text-[22px] lg:text-[24px] sm:text-[20px]'>${product.price}</span>
        )}
      </div>
    </div>
  );
};

function NewArrivals() {
  const router = useRouter();
  const client = generateClient();
  const dispatch = useDispatch();
  const { newArrivals, topSelling } = useSelector((state: any) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.graphql({ query: listAddProducts });

        const products = result.data.listAddProducts.items;
        const newArrivalsData: any = products.filter((product: any) => product.category === 'newArrivals');
        const topSellingData: any = products.filter((product: any) => product.category === 'topSelling');
        dispatch(setNewArrivals(newArrivalsData.slice(0, 4)));
        dispatch(setTopSelling(topSellingData.slice(0, 4)));
        return products;
      } catch (error) {
        return;
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleClick = (productId: string) => {
    router.push(`/productPage/?productId=${productId}`);
  };

  return (
    <>
      <h2 className='flex justify-center text-[48px] py-[35px] w-full ABeeZee'>New Arrivals</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:px-[100px] px-[10px] gap-4 '>
        {newArrivals.map((product: any) => (
          <ProductCard key={product.id} product={product} onClick={handleClick} />
        ))}
      </div>
      <div className='flex justify-center items-center  bg-white mt-12 '>
        <button className='font-ABeeZee border border-gray-300 w-[218px] h-[52px] text-black bg-white px-6 py-2 rounded-full text-[16px] leading-[18.91px] font-normal hover:bg-gray-200'>
          View All
        </button>
      </div>

      <h2 className='flex justify-center text-[48px] py-[35px] w-full ABeeZee'>top selling</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:px-[100px] px-[10px] gap-4 '>
        {topSelling.map((product: any) => (
          <ProductCard key={product.id} product={product} onClick={handleClick} />
        ))}
      </div>
      <div className='flex justify-center items-center  bg-white mt-12 '>
        <button className='font-ABeeZee border border-gray-300 w-[218px] h-[52px] text-black bg-white px-6 py-2 rounded-full text-[16px] leading-[18.91px] font-normal hover:bg-gray-200'>
          View All
        </button>
      </div>
    </>
  );
}

export default NewArrivals;
