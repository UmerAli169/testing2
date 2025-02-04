'use client';
import React, { useEffect, useState } from 'react';
import { Star, ChevronUp, MoreHorizontal } from 'lucide-react';
import { listAddProducts, getAddProduct, listReviews } from '@/graphql/queries';
import { createReview } from '@/graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { useSearchParams } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';

const Reviewss = () => {
  const [product, setProduct] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
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
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
    );
  };

  const handleSubmitReview = async () => {
    try {
      const currentUser = await getCurrentUser();
      const userId = currentUser.userId;

      // Submit review to backend
      const reviewResult = await client.graphql({
        query: createReview,
        variables: {
          input: {
            rating: newReview.rating,
            text: newReview.text,
            userId: userId,
            productId: product.id,
          },
        },
      });

      const newReviewData = reviewResult.data.createReview;

      // Add review to local state
      setReviews([...reviews, newReviewData]);

      setIsModalOpen(false);
      setNewReview({ rating: 0, text: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResult = await client.graphql({
          query: getAddProduct,
          variables: { id: productId  as any},
        });
        setProduct(productResult.data.getAddProduct);

        const reviewsResult = await client.graphql({
          query: listReviews,
          variables: {
            filter: { productId: { eq: productId } },
          },
        });

        setReviews(reviewsResult.data.listReviews.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [productId]);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Date not available';
    const date = new Date(dateString);
    return `Posted on ${date.toLocaleDateString('en-US', {
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
                activeTab === tab ? 'max-w-[145px] ABeeZee border-b-2 border-black' : 'text-gray-500'
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
                className='px-[28px] py-[32px] rounded-lg border border-gray-300 max-w-[610px] max-h-[241px] overflow-hidden'
              >
                <div className='flex justify-between items-start mb-2'>
                  <div>
                    {renderStars(review.rating)}
                    <span className='ABeeZee flex items-center gap-1'>{review.userId}</span>
                  </div>
                  <button>
                    <MoreHorizontal className='w-6 h-6 text-gray-500' />
                  </button>
                </div>
                <p className='text-gray-600 ABeeZee mb-2 line-clamp-3'>{review.text}</p>
                <p className='text-sm ABeeZee text-gray-500'>{formatDate(review.createdAt)}</p>
              </div>
            ))}
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
                    className={`w-6 h-6 cursor-pointer ${
                      i < newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
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
