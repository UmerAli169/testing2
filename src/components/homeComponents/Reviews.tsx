"use client";
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api'; // Assuming AWS Amplify is used
import { listReviews } from '@/graphql/queries'; // Replace with your actual GraphQL query

function Reviews() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [reviewsData, setReviewsData] = useState<any[]>([]); // Holds the fetched reviews
  const router = useRouter();
  const client = generateClient();

  useEffect(() => {
    // Fetch reviews from the database
    const fetchReviews = async () => {
      try {
        const response = await client.graphql({
          query: listReviews,
        });

        console.log(response, "fetchedReviews");
        const fetchedReviews = response.data.listReviews.items;
        setReviewsData(fetchedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  // Format the date to "Posted at November 13, 2013"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `Posted at ${date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}`;
  };

  return (
    <>
      <div className="m-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-normal mb-4 max-w-[660px] top-[3364px] left-100px] ABeeZee text-[48px] leading-[56.74px] py-[44px]">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevReview}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Previous review"
            >
              &larr;
            </button>
            <button
              onClick={nextReview}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Next review"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {reviewsData.map((review: any, index: number) => (
            <div
              key={review.id}
              className={`bg-[#FFFFFF] p-6 rounded-lg ${
                index === currentReview ? "md:block" : "hidden md:block"
              }`}
            >
              <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-600 text-sm mb-1">{review.text}</p>
              <p className="text-gray-500 text-xs">{formatDate(review.updatedAt)}</p> {/* Formatted date */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Reviews;
