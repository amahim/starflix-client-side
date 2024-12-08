import React, { useEffect, useState } from "react";
import { MdMovie } from "react-icons/md";
import AllMoviesDisplay from "./AllMoviesDisplay";

const AllMovies = () => {
  const [allmovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch("https://starflix-server.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

   // search 
  const [search,setSearch]= useState("")


  useEffect(() => {
    fetch(`https://starflix-server.vercel.app/movies?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
  }, [search]);

 

  return (
    <div>
      <div className="py-5 text-center flex gap-2 justify-center items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          All Movies
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          <MdMovie />
        </p>
      </div>
      <div className="py-5 w-4/5  md:w-3/5 text-center flex mx-auto ">
        <input
          type="text"
          name="search"
          onChange={(e)=> setSearch(e.target.value)}
          placeholder="Search movies"
          className="w-full   rounded-xl bg-[#37f51e49] border-2 border-[#37f51e] px-4 py-2"
        />
      </div>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 mx-auto">
        {allmovies.map((movie) => (
          <AllMoviesDisplay
            key={movie._id}
            movie={movie}
            allmovies={allmovies}
            setAllMovies={setAllMovies}
          />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
