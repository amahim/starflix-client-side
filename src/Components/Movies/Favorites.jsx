import React, { useEffect, useState, useContext } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import FavMoviesDisplay from "./FavMoviesDisplay";
import { AuthContext } from "../Provider/AuthProvider";

const Favorites = () => {
  const [favMovies, setFavMovies] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://starflix-server.vercel.app/FavMovies?favListedemail=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setFavMovies(data))
        .catch((err) => console.error("Failed to fetch favorite movies:", err));
    }
  }, [user]);

  return (
    <div>
      <div className="py-5 text-center flex gap-2 justify-center items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          My Favorite Movies
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          <MdMovie />
        </p>
      </div>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 mx-auto">
        {favMovies.map((favMovie) => (
          <FavMoviesDisplay
            key={favMovie._id}
            favMovie={favMovie}
            favMovies={favMovies}
            setFavMovies={setFavMovies}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
