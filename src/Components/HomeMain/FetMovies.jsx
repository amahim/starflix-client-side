import React from "react";
import { Link } from "react-router-dom";
const FetMovies = ({ fetMovie }) => {
  const { _id, poster, title, genre, duration, releaseYear, rating } = fetMovie;

  return (
    <div className="h-64 md:h-60 flex bg-white items-center  rounded-xl shadow-xl ">
      {/* Movie Poster */}
      <div className="w-48">
        <img
          src={poster}
          alt={title}
          className="object-cover rounded-s-xl h-64 md:h-60"
        />
      </div>

      <div className="p-4 space-y-2 w-2/3">
        {/* Movie Title */}
        <h2 className="text-lg font-semibold text-black">{title}</h2>

        {/* Genre */}
        <p className="text-sm text-gray-600">
          <span className="font-medium text-black">Genre:</span> {genre}
        </p>

        {/* Duration */}
        <p className="text-sm text-gray-600">
          <span className="font-medium text-black">Duration:</span> {duration}{" "}
          minutes
        </p>

        {/* Release Year */}
        <p className="text-sm text-gray-600">
          <span className="font-medium text-black">Release Year:</span>{" "}
          {releaseYear}
        </p>

        {/* Rating */}
        <p className="text-sm text-gray-600">
          <span className="font-medium text-black">Rating:</span> {rating}
        </p>

        {/* See Details Button */}
        <Link to={`/movie-details/${_id}`}>
          <button className="mt-4 w-full px-4 py-2 bg-[#37f51e] text-white font-medium rounded hover:bg-green-600 transition-colors">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FetMovies;
