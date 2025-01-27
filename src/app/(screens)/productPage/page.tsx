'use client';
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { listAddProducts, getAddProduct, listReviews } from '@/graphql/queries'; // Adjust paths
import { createCartItem, createReview } from '@/graphql/mutations'; // Adjust paths
import { generateClient } from 'aws-amplify/api';
import { useSearchParams } from 'next/navigation';
import { Filter, ChevronUp, MoreHorizontal } from 'lucide-react';
import { getCurrentUser } from 'aws-amplify/auth';
import { StorageImage } from '@aws-amplify/ui-react-storage';

const ProductDetails = () => {
  const [product, setProduct] = useState<any>(null); // State for product details
  const [reviews, setReviews] = useState<any[]>([]); // State for product reviews
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]); // State for related products
  const [selectedSize, setSelectedSize] = useState('Large');
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Product Details');
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [newReview, setNewReview] = useState({ rating: 0, text: '' });
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

  const handleSubmitReview = async () => {
    try {
      // Fetch the logged-in user details using getCurrentUser
      const currentUser = await getCurrentUser(); // Your method to get the current user
      const userId = currentUser.userId; // Assuming the user object has 'userId'

      // Add the review to the local state
      setReviews([
        ...reviews,
        {
          ...newReview,
          userId: userId, // Sending userId instead of name
          productId: product.id, // Product ID
        },
      ]);

      // Submit the review to the backend
      const reviewResult = await client.graphql({
        query: createReview,
        variables: {
          input: {
            rating: newReview.rating,
            text: newReview.text, // Your comment field
            userId: userId, // User ID
            productId: product.id, // Product ID
          },
        },
      });

      console.log('Review submission result:', reviewResult);

      // Reset the form and close the modal
      setIsModalOpen(false);
      setNewReview({ rating: 0, text: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // Fetch product details, reviews, and related products
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product details
        const productResult = await client.graphql({ query: getAddProduct, variables: { id: productId } });
        setProduct(productResult.data.getAddProduct);

        // Fetch product reviews (you might need to adjust the query based on your GraphQL schema)
        const reviewsResult = await client.graphql({ query: listReviews, variables: { id: productId } });
        setReviews(reviewsResult.data.listReviews.items);

        // Fetch related products (limit to 4)
        const relatedResult = await client.graphql({ query: listAddProducts, variables: { limit: 4 } });
        setRelatedProducts(relatedResult.data.listAddProducts.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `Posted at ${date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}`;
  };

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
      {/* Breadcrumb */}
      <div className='flex items-center gap-2 text-sm mb-8'>
        <span>Home</span>
        <span>/</span>
        <span>Shop</span>
        <span>/</span>
        <span>{product?.category || 'Category'}</span>
        <span>/</span>
        <span>{product?.name || 'Product'}</span>
      </div>

      {/* Product and Images */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column - Images */}
        <div className='space-y-4'>
          <div className='rounded-lg p-8'>
            <StorageImage
              path={`public/${product?.imageKey}`}
              alt={product?.name || 'Product Image'}
              className='w-full object-contain'
              accessLevel='guest'
            />
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {product?.gallery?.map((img: string, index: number) => (
              <div key={index} className='border rounded-lg p-2'>
                <img src={img} alt={`Gallery ${index}`} className='w-full object-contain' />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div>
          <h1 className='text-2xl font-semibold mb-2'>{product?.name || 'Product Name'}</h1>
          <div className='flex items-center gap-2 mb-4'>
            {renderStars(product?.rating || 0)}
            <span className='text-sm text-gray-600'>{product?.rating || 0}/5</span>
          </div>

          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl font-bold'>${product?.price || '0'}</span>
            {product?.oldPrice && <span className='text-gray-500 line-through'>${product?.oldPrice}</span>}
            {product?.discount && <span className='text-red-500'>-{product?.discount}%</span>}
          </div>

          <p className='text-gray-600 mb-6'>{product?.description || 'Product description'}</p>

          {/* Size Selection */}
          <div className='mb-6'>
            <h3 className='font-medium mb-2'>Choose Size</h3>
            <div className='flex gap-2'>
              {product?.sizes?.map((size: string) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size ? 'bg-black text-white' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className='flex gap-4 mb-8'>
            <div className='flex items-center border rounded-lg'>
              <button className='px-4 py-2' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <span className='px-4 py-2'>{quantity}</span>
              <button className='px-4 py-2' onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button className='flex-1 bg-black text-white py-2 px-4 rounded-lg' onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className='border-b mb-6'>
        <div className='flex gap-6'>
          {['Product Details', 'Rating & Reviews', 'FAQs'].map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${activeTab === tab ? 'border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      {activeTab === 'Rating & Reviews' && (
        <div className='mt-12 space-y-6'>
          <div className='flex justify-between items-center'>
            <h3 className='font-medium'>ALL Reviews ({reviews.length})</h3>
            <div className='flex gap-4'>
              <button className='flex items-center bg-gray-200 px-4 py-2 rounded-full text-sm'>
                <Filter className='w-5 h-5 text-gray-600 mr-2' />
              </button>
              <button className='flex items-center bg-gray-200 px-4 py-2 rounded-full text-sm'>
                <span className='mr-2'>Latest</span>
                <ChevronUp className='w-4 h-4 text-gray-600' />
              </button>
              <button
                className='text-sm bg-black text-white px-4 py-2 rounded-full'
                onClick={() => setIsModalOpen(true)}
              >
                Write a Review
              </button>
            </div>
          </div>

          {/* Review List */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {reviews.slice(0, 5).map((review, index) => (
              <div key={index} className='border rounded-lg p-4'>
                <div className='flex justify-between items-start mb-2'>
                  <div>
                    <div className='flex items-center gap-2'>
                      <span className='font-medium'>{review.userId}</span>
                      {review.verified && <span className='bg-green-500 w-2 h-2 rounded-full' />}
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <button>
                    <MoreHorizontal className='w-6 h-6 text-gray-500' />
                  </button>
                </div>
                <p className='text-gray-600 mb-2'>{review.text}</p>
                <p className='text-sm text-gray-500'>{formatDate(review.updatedAt)}</p>
              </div>
            ))}
          </div>

          {/* Read More Reviews Button */}
          <div className='text-center mt-4'>
            <button className='border bg-white text-black py-2 px-4 rounded-full'>Read More Reviews</button>
          </div>
        </div>
      )}

      {/* Modal for Writing a Review */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg w-96'>
            <h3 className='text-xl font-semibold mb-4'>Write a Review</h3>
            <div className='mb-4'>
              <label className='block mb-2'>Rating</label>
              <div className='flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 cursor-pointer ${i < newReview.rating ? 'fill-yellow-400' : 'text-gray-300'}`}
                    onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                  />
                ))}
              </div>
            </div>
            <div className='mb-4'>
              <label className='block mb-2'>Comment</label>
              <textarea
                className='w-full p-2 border border-gray-300 rounded-lg'
                rows={4}
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              />
            </div>
            <div className='flex justify-between'>
              <button className='py-2 px-4 bg-gray-300 rounded-lg' onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className='py-2 px-4 bg-black text-white rounded-lg' onClick={handleSubmitReview}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
