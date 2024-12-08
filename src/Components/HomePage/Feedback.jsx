import React from "react";

const Feedback = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-11/12 max-w-md p-6 shadow-md rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#37f51e]">
            Feedback About Us
          </h1>
          <p className="text-white mt-2">We value your feedback!</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Comment Box */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Your Comments</span>
            </label>
            <textarea
              placeholder="Write your comments here..."
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Rate Us</span>
            </label>
            <div className="rating ">
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-[#37f51e]"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-[#37f51e]"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-[#37f51e]"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-[#37f51e]"
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-[#37f51e]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="">
            <button className="btn bg-[#37f51e] text-white w-full">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
