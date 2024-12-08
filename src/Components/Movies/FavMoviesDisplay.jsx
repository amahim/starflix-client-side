import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const FavMoviesDisplay = ({ favMovie, favMovies, setFavMovies }) => {
  const { user } = useContext(AuthContext);
  const { _id, favListedemail } = favMovie;
  const { poster, title, genre, releaseYear, duration, rating } =
    favMovie.movie;

  const handleRemoveFav = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#37f51e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://starflix-server.vercel.app/favMovies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Removed!",
                "The movie has been removed from your favorites.",
                "success"
              );
              // Update state to remove the movie from the list
              const remaining = favMovies.filter((mov) => mov._id !== _id);
              setFavMovies(remaining);
            }
          });
      }
    });
  };

  // Render only if the movie belongs to the logged-in user
  return (
    user?.email === favListedemail && (
      <div className="h-64 md:h-60 flex bg-white items-center rounded-xl shadow-xl">
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

          {/* Remove from Favorites Button */}
          <button
            onClick={() => handleRemoveFav(_id)}
            className="btn btn-error w-full text-white font-medium rounded"
          >
            Remove From Fav
          </button>
        </div>
      </div>
    )
  );
};

export default FavMoviesDisplay;
