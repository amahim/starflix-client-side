import React, { useEffect, useState } from "react";
import ReviewMovie from "./ReviewMovie";
import { MdOutlineRateReview } from "react-icons/md";

const FetchReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <div className="py-10 text-center flex gap-2 justify-center items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          User Reviews
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          <MdOutlineRateReview />
        </p>
      </div>
      <ReviewMovie reviews={reviews} />
    </div>
  );
};

export default FetchReview;
