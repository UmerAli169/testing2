'use client';
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { listAddProducts, getAddProduct, listReviews } from '@/graphql/queries'; // Adjust paths
import { createCartItem, createReview } from '@/graphql/mutations'; // Adjust paths
import { generateClient } from 'aws-amplify/api';
import { useSearchParams } from 'next/navigation';
import { Filter, ChevronUp, MoreHorizontal } from 'lucide-react';
import { getCurrentUser } from 'aws-amplify/auth';
import NameDetails from '@/components/productPage/nameDetails';

const Reviewss = () => {
  const [product, setProduct] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');

  const [activeTab, setActiveTab] = useState('Rating & Reviews');
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResult = await client.graphql({ query: getAddProduct, variables: { id: productId } });
        console.log(productResult.data.getAddProduct, 'productResult');
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
  return (
    <div className='mx-auto'>
      <div className='w-full border-t border-gray-300 mt-12'>
        <div className='flex gap-6 justify-around'>
          {['Product Details', 'Rating & Reviews', 'FAQs'].map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${
                activeTab === tab ? ' max-w-[145px] ABeeZee border-b-2 border-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

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

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {reviews.slice(0, 6).map((review, index) => (
              <div
                key={index}
                className='px-[28px] py-[32px] rounded-lg border border-gray-300 max-w-[610px] max-h-[241px] 
               overflow-hidden text-ellipsis'
              >
                <div className='flex justify-between items-start mb-2 '>
                  <div>
                    <div className='flex items-center'>
                      {review.verified && <span className='bg-green-500 w-2 h-2 rounded-full ' />}
                    </div>
                    {renderStars(review.rating)}
                    <span className='ABeeZee'>{review.userId}</span>
                  </div>
                  <button>
                    <MoreHorizontal className='w-6 h-6 text-gray-500' />
                  </button>
                </div>
                <p className='text-gray-600 ABeeZee mb-2 line-clamp-3'>{review.text}</p>
                <p className='text-sm ABeeZee text-gray-500'>{formatDate(review.updatedAt)}</p>
              </div>
            ))}
          </div>

          <div className='text-center mt-4'>
            <div className='flex justify-center py-[16px]'>
              <button className='w-full sm:w-auto h-[52px] border border-gray-300 bg-[#F2F0F1] text-black px-[54px] py-[16px] rounded-[62px]'>
                Load More Reviews
              </button>
            </div>
          </div>
        </div>
      )}

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

export default Reviewss;
