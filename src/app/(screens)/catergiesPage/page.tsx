'use client';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listAddProducts } from '@/graphql/queries';
import { StarIcon } from 'lucide-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { products as staticProducts } from './data';
import CateryisFilter from '@/components/filter/cateryisFilter';

const client = generateClient();
const ITEMS_PER_PAGE = 9;

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.graphql({ query: listAddProducts });
        setProducts(result.data.listAddProducts.items || staticProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleClick = (productId: string) => {
    console.log('Product clicked:', productId);
    // Example: router.push(`/product/${productId}`)
  };

  const renderRatingStars = (rating: number) => (
    <div className='flex items-center gap-1'>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className='ABeeZee text-gray-600 ml-1'>{rating}</span>
    </div>
  );

  const ProductCard = ({ product }: any) => (
    <div
      className='max-w-[268px] max-height-[402px] rounded-lg p-4 transition-shadow duration-200 hover:shadow-lg'
      onClick={() => handleClick(product.id)}
    >
      <div className='relative aspect-square bg-[#F0EEED] mb-4 border border-gray-500 rounded-lg '>
        <StorageImage
          path={`public/${product.imageKeys?.[0]}`}
          alt={product.productName}
          className='w-full h-full object-cover rounded-md mix-blend-multiply '
          accessLevel='guest'
        />
      </div>
      <h3 className='ABeeZee font-medium mb-2'>{product.productName}</h3>
      {renderRatingStars(product.rating)}
      <div className='flex items-center gap-2 mb-2'>
        <span className='ABeeZee font-bold'>${product.price}</span>
      </div>
    </div>
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-2'>
          <span className='ABeeZee text-gray-500'>Home</span>
          <img src='/svgs/productTopBar/replaceOFSlash.svg' alt='Close' className='w-[6px]' />{' '}
          <span className='ABeeZee'>Casual</span>
        </div>
      </div>
      <div className='flex min-h-screen bg-gray-50 '>
        <CateryisFilter />

        <div className='flex-1 p-6 mycontainer'>
          <div className='flex justify-end mb-4'>
            <span className='ABeeZee text-gray-500'>
              Showing {startIndex + 1} to {Math.min(endIndex, products.length)} of {products.length} Products | Sort by:
              Most Popular
            </span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-[10px]  '>
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='w-full border-t border-gray-300 mt-12'></div>

          <div className='flex justify-between items-center gap-4 mt-6'>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border border-gray-500 ${
                currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white text-black'
              }`}
            >
              Previous           <img src='/svgs/productTopBar/replaceOFSlash.svg' alt='Close' className='w-[6px]' />{' '}

            </button>

            <div className='flex gap-2'>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === pageNumber ? '  hover:bg-gray-600 border  border-gray-500  hover:bg-gray-300' : 'bg-white text-gray'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border border-gray-500 rounded-md ${
                currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-white text-black'
              }`}
            >
              Next          <img src='/svgs/productTopBar/replaceOFSlash.svg' alt='Close' className='w-[6px]' />{' '}

            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
