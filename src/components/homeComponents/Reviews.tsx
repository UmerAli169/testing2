"use client";
import { Star } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { generateClient } from "aws-amplify/api";
import { listReviews } from "@/graphql/queries";

function Reviews() {
  const [reviewsData, setReviewsData] = useState<any[]>([]);
  const client = generateClient();
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await client.graphql({
          query: listReviews,
        });

        const fetchedReviews = response.data.listReviews.items;
        setReviewsData(fetchedReviews);
        return fetchedReviews;
      } catch (error) {
        return;
      }
    };

    fetchReviews();
  }, []);

  const scrollToReview = (direction: "prev" | "next") => {
    if (!scrollContainer.current) return;

    const scrollAmount = scrollContainer.current.offsetWidth / 4;
    if (direction === "next") {
      scrollContainer.current.scrollLeft += scrollAmount;
    } else {
      scrollContainer.current.scrollLeft -= scrollAmount;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `Posted at ${date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}`;
  };

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-normal mb-4 max-w-[660px] ABeeZee text-sm sm:text-[48px]  leading-[56.74px] py-[44px]">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex gap-2">
          <img
            onClick={() => scrollToReview("next")}
            src="/svgs/reviews/moveup.svg"
            className="p-1 h-[18.75px] w-[21.75px] rounded-full "
            aria-label="Next review"
          />

          <img
            onClick={() => scrollToReview("prev")}
            src="/svgs/reviews/movedown.svg"
            aria-label="Previous review"
            className="p-1  h-[18.75px] w-[21.75px]  rounded-full "
          />
        </div>
      </div>

      <div
        ref={scrollContainer}
        className="flex gap-6 overflow-x-auto hide-scrollbar"
      >
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="p-6 rounded-lg border border-gray-300 min-w-[300px] flex-shrink-0"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/svgs/reviews/star.svg"
                  alt="Verified"
                  className={`w-[22.5px] h-[22.5px] ${
                    i < review.rating ? "fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* User Info */}
            <span className="font-medium flex items-center gap-1">
              {review.userId.slice(0, 6)}
              <img
                src="/svgs/reviews/greenTick.svg"
                alt="Verified"
                className="w-[19.5px] h-[19.5px]"
              />
            </span>

            <p className="text-gray-600 text-sm mb-1">{review.text}</p>
            <p className="text-gray-500 text-xs">
              {formatDate(review.updatedAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
