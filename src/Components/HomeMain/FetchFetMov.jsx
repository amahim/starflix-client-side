import React, { useEffect, useState } from "react";
import { MdMovie } from "react-icons/md";
import FetMovies from "./FetMovies";
import { Link } from "react-router-dom";

const FetchFetMov = () => {
  const [allmovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch("https://starflix-server.vercel.app/movies/highest-rated")
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
  }, []);

  return (
    <div>
      <div className="py-10 text-center flex gap-2 justify-center items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          Featured Movies
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          <MdMovie />
        </p>
      </div>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 mx-auto">
        {allmovies.map((fetMovie) => (
          <FetMovies key={fetMovie._id} fetMovie={fetMovie} />
        ))}
      </div>
      <div className="pt-5 text-center">
        <Link
          to="/all-movies"
          className="text-white btn border-2 rounded-xl bg-[#37f51e44] border-[#37f51e]"
        >
          See all movies
        </Link>
      </div>
    </div>
  );
};

export default FetchFetMov;
