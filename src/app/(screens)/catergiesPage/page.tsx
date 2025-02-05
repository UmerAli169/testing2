'use client';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listAddProducts } from '@/graphql/queries';
import { Star, StarIcon } from 'lucide-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { useRouter } from 'next/navigation';
import CategoryFilter from '../../../components/filter/CateryisFilter';

const client = generateClient();
const ITEMS_PER_PAGE = 9;

const ProductListing = () => {
  const [filter, setFilters] = useState<any>({
    category: '',
    minPrice: 50,
    maxPrice: 2000,
    colors: [],
    sizes: [],
  });
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.graphql({ query: listAddProducts });
        setProducts(result.data.listAddProducts.items || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const query = new URLSearchParams(window.location.search).get('search');
    if (query) {
      setSearchQuery(query);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset pagination on filter or search query change
  }, [filter, searchQuery]);

  const applyFilters = (filters: {
    category: string;
    minPrice: number;
    maxPrice: number;
    colors: string[];
    sizes: string[];
  }) => {
    setFilters(filters);
  };

  const handleClick = (productId: string) => {
    router.push(`/productPage/?productId=${productId}`);
  };

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = filter.category ? product.category === filter.category : true;
    const isPriceMatch = product.discountedPrice >= filter.minPrice && product.discountedPrice <= filter.maxPrice;
    const isColorMatch = filter.colors.length > 0 ? filter.colors.includes(product.color) : true;
    const isSizeMatch = filter.sizes.length > 0 ? filter.sizes.includes(product.size) : true;
    const isSearchMatch = product.productName.toLowerCase().includes(searchQuery.toLowerCase());

    return isCategoryMatch && isPriceMatch && isColorMatch && isSizeMatch && isSearchMatch;
  });

  const productsToDisplay = filteredProducts.length ? filteredProducts : products;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = productsToDisplay.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productsToDisplay.length / ITEMS_PER_PAGE);

  const getAverageRating = (product: any) => {
    if (!product?.Reviews?.items || product.Reviews.items.length === 0) return 0;
    const total = product.Reviews.items.reduce((sum: number, review: any) => sum + review.rating, 0);
    return total / product.Reviews.items.length;
  };

  const renderRatingStars = (product: any) => {
    const rating = getAverageRating(product);
    return (
      <div className='flex items-center gap-1'>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className='h-4 w-4'
            color={index < Math.floor(rating) ? '#FACC15' : '#D1D5DB'}
            fill={index < Math.floor(rating) ? '#FACC15' : 'none'}
          />
        ))}
        <span className='ABeeZee text-gray-600 ml-1'>{rating}</span>
      </div>
    );
  };

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-2'>
          <span className='ABeeZee text-gray-500'>Home</span>
          <img src='/svgs/productTopBar/replaceOFSlash.svg' alt='Close' className='w-[6px]' />
          <span className='ABeeZee'>Casual</span>
        </div>
      </div>

      <div className='flex min-h-screen'>
        <CategoryFilter applyFilters={applyFilters} />

        <div className='flex-1 p-6'>
          <div className='flex justify-end mb-4'>
            <span className='ABeeZee text-gray-500'>
              Showing {startIndex + 1} to {Math.min(endIndex, productsToDisplay.length)} of {productsToDisplay.length}{' '}
              Products | Sort by: Most Popular
            </span>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-4'>
            {paginatedProducts.map((product: any) => (
              <div
                key={product.id}
                className='relative  max-height-[441px] rounded-lg p-2 transition-shadow duration-100 hover:shadow-lg font-ABeeZee'
                onClick={() => handleClick(product.id)}
              >
                <div className='relative aspect-square mb-2 border rounded-lg'>
                  <StorageImage
                    path={`public/${product.imageKeys?.[0]}`}
                    alt={product.productName}
                    className='w-full h-full object-cover rounded-md border-none bg-[#F0EEED]'
                    accessLevel={'guest' as any}
                  />
                </div>
                <h3 className='ABeeZee lg:text-[18px] sm:text-[14px] text-[16px] text-gray-800 mb-1'>
                  {product.productName}
                </h3>
                {renderRatingStars(product)}

                {/* Discounted Price Display */}
                {product.discountedPrice ? (
                  <div className='flex items-center gap-1 mb-2'>
                    <span className='ABeeZee lg:text-[16px] sm:text-[14px] text-[14px]'>
                      ${product.discountedPrice}
                    </span>
                    <span className='line-through text-gray-500 lg:text-[16px] sm:text-[14px] text-[14px]'>
                      ${product.price}
                    </span>
                    <span className='bg-red-300/20 ABeeZee rounded-2xl lg:text-[16px] sm:text-[14px] text-[14px]'>
                      -{product.discountValue}%
                    </span>
                  </div>
                ) : (
                  <div className='flex items-center gap-1 mb-2'>
                    <span className='ABeeZee lg:text-[16px] sm:text-[14px] text-[14px]'>${product.price}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='w-full border-t border-gray-300 mt-12'></div>

          <div className='flex justify-between items-center gap-4 mt-6'>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border border-gray-500 ${
                currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white text-black'
              } inline-flex items-center gap-2`}
            >
              <img src='/svgs/catergious/arrowButton.svg' alt='Previous' />
              Previous
            </button>

            <div className='flex gap-2'>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === pageNumber
                      ? 'hover:bg-gray-600 border border-gray-500 hover:bg-gray-300'
                      : 'bg-white text-gray'
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
              } inline-flex items-center gap-2`}
            >
              Next
              <img src='/svgs/catergious/nextArrow.svg' alt='Next' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
