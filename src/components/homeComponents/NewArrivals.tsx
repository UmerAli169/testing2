'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { generateClient } from 'aws-amplify/api';
import { listAddProducts } from '@/graphql/queries';
import { setNewArrivals, setTopSelling } from '../../app/Redux/features/products/productsSlice';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { StarIcon } from 'lucide-react';

// Reusable Product Card Component
const ProductCard = ({ product, onClick, onDelete }: any) => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='max-w-[296px] min-height-[444px] gap-1 cursor-pointer relative'>
      {/* Image */}
      <div className='relative aspect-square bg-[#F0EEED] mb-4 rounded-2xl'>
        <StorageImage
          path={`public/${product.imageKeys?.[0]}`} // Ensure correct path
          alt={product.productName}
          className='w-full h-full object-cover rounded-md mix-blend-multiply'
          accessLevel='guest'
        />
      </div>

      {/* Product Name */}
      <h3 className='font-ABeeZee text-[18px] lg:text-[20px] sm:text-[16px] mb-2'>{product.productName}</h3>

      {/* Rating */}
      <div className='flex items-center gap-1'>
        {[...Array(product.rating ?? 5)].map((_, i) => (
          <img key={i} src='/svgs/reviews/star.svg' alt='Verified' className='max-w-[22.5px]  max-h-[22.5px]' />
        ))}
        <span className='ABeeZee lg:text-[14px] sm:text-[12px] text-gray-600 ml-1'>
          {product.rating ? `${product.rating}/5` : '4.5/5'}
        </span>
      </div>

      {/* Price Section */}
      <div className='flex ABeeZee items-center gap-2 mb-2'>
        {product.discountedPrice ? (
          <>
            <span className='text-[22px] lg:text-[24px] sm:text-[20px] ABeeZee '>${product.discountedPrice}</span>
            <span className='text-gray-400 lg:text-[24px] sm:text-[20px] line-through ABeeZee'>${product.price}</span>
            <p className='bg-red-300/20 ABeeZee rounded-2xl'>{product.discountValue}%</p>
          </>
        ) : (
          <span className=' ABeeZee text-[22px] lg:text-[24px] sm:text-[20px]'>${product.price}</span>
        )}
      </div>

      {/* Options Menu Button */}
      <button className='absolute top-0 right-2 text-gray-600 p-2 rounded-full' onClick={toggleMenu}>
        ...
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className='absolute top-10 right-2 bg-white border border-gray-300 rounded-lg shadow-md w-36'>
          <ul>
            <li className='ABeeZee px-2 py-2 cursor-pointer hover:bg-gray-100' onClick={() => onDelete(product.id)}>
              Delete
            </li>
            
            <li className='ABeeZee px-2 py-2 cursor-pointer hover:bg-gray-100' onClick={() => setIsMenuOpen(false)}>
              Cancel
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

function NewArrivals() {
  const router = useRouter();
  const client = generateClient();
  const dispatch = useDispatch();
  const { newArrivals, topSelling } = useSelector((state: any) => state.products);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

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
    console.log(productId, 'pp');
    router.push(`/productPage/?productId=${productId}`);
  };

  const handleDelete = (productId: string) => {
    setProductToDelete(productId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      // Perform deletion logic
      const updatedNewArrivals = newArrivals.filter((product: any) => product.id !== productToDelete);
      const updatedTopSelling = topSelling.filter((product: any) => product.id !== productToDelete);

      dispatch(setNewArrivals(updatedNewArrivals));
      dispatch(setTopSelling(updatedTopSelling));

      // Close the modal
      setIsModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  return (
    <>
      {/* New Arrivals Section */}
      <h2 className='flex justify-center text-[48px] py-[35px] w-full font-ABeeZee'>New Arrivals</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 mx-[20px]  lg:mx-[100px] sm:mx-[20px] gap-6 '>
        {newArrivals.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div className='flex justify-center py-[16px]'>
        <button className='w-full sm:w-auto h-[52px] border border-gray-300 bg-[#FFFFFF] text-black px-[54px] py-[16px] rounded-[62px]'>
          View All
        </button>
      </div>

      {/* Top Selling Section */}
      <h2 className='flex justify-center text-[48px] py-[35px] w-full font-ABeeZee'>top selling</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 mx-[20px]  lg:mx-[100px] sm:mx-[20px] gap-6'>
        {topSelling.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div className='flex justify-center py-[16px]'>
        <button className='w-full sm:w-auto h-[52px] border border-gray-300 bg-[#FFFFFF] text-black px-[54px] py-[16px] rounded-[62px]'>
          View All
        </button>
      </div>

      {/* Modal for Deletion Confirmation */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg w-[300px] text-center'>
            <h3 className='text-lg font-bold mb-4'>Are you sure you want to delete this product?</h3>
            <div className='flex justify-around'>
              <button className='bg-red-500 text-white px-4 py-2 rounded-lg' onClick={confirmDelete}>
                Yes, Delete
              </button>
              <button className='bg-gray-500 text-white px-4 py-2 rounded-lg' onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewArrivals;
