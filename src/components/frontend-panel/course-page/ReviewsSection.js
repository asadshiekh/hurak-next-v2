// components/ReviewsSection.js
"use client"

import ReviewCard from './ReviewCard';
import { useState } from 'react';
import ReviewModal from './ReviewModel';
export default function ReviewsSection({ reviews }) {

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    };

  return (
    <section className="review-section bg-[#f8f9fa]">
      <div className="container mx-auto px-5 lg:px-20 py-8">
        <div className="text-2xl font-semibold mb-4">
          <span className="text-yellow-500">★ 4.8</span> course rating · 1136 ratings
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              course={review.course}
              date={review.date}
              rating={review.rating}
              review={review.review}
            />
          ))}      
          </div>
          

          <div className="btn_view_more mt-10 text-center">
          <button
            onClick={handleModalOpen}
            className="mt-5 bg-primary text-white px-4 py-2 rounded-md border hover:bg-transparent hover:border-primary hover:text-black transition duration-300 ease-in-out text-base"
          >
            See More Reviews
          </button>
        </div>

        {/* Modal */}
        <ReviewModal show={showModal} onClose={handleModalClose} reviews={reviews} />

      </div>
    </section>
  );
}
