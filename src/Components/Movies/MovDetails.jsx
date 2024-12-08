import { FaArrowCircleLeft, FaHeart, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MovDetails = () => {
  const movie = useLoaderData();
  const location = useLocation();
  const { allMovies, setAllMovies } = location.state || {};
  const { user } = useContext(AuthContext);

  const {
    _id,
    poster,
    title,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
    addByEmail,
  } = movie;

  const navigate = useNavigate();

  const handleAddToFav = () => {
    const favMovie = {
      favListedemail: user?.email,
      movie,
    };

    fetch("https://starflix-server.vercel.app/FavMovies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added to My Favorites!",
            text: `${movie.title} has been added to your favorites.`,
          });
        }
      });
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#37f51e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://starflix-server.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              navigate("/all-movies");
              Swal.fire("Deleted!", "The Movie has been deleted.", "success");
              const remaining = allMovies.filter((mov) => mov._id !== _id);
              setAllMovies(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="md:w-3/5 w-4/5 mx-auto py-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white text-lg md:text-xl px-4 py-2 rounded-md"
        >
          <FaArrowCircleLeft /> Go Back
        </button>
      </div>
      <div className="md:w-2/4 w-4/5 mx-auto ">
        <div className="flex md:flex-row flex-col bg-base-300 md:items-center items-start  rounded-xl shadow-xl ">
          {/* Movie Poster */}
          <div className="md:w-2/4">
            <img
              src={poster}
              alt={title}
              className="object-cover rounded-t-xl md:rounded-s-xl w-full"
            />
          </div>

          <div className="p-4 space-y-2 md:w-2/4">
            {/* Movie Title */}
            <h2 className="text-lg font-semibold text-white">{title}</h2>

            {/* Genre */}
            <p className="text-sm text-[#b6b3b3d0]">
              <span className="font-medium text-white">Genre:</span> {genre}
            </p>

            {/* Duration */}
            <p className="text-sm text-[#b6b3b3d0]">
              <span className="font-medium text-white">Duration:</span>{" "}
              {duration} minutes
            </p>

            {/* Release Year */}
            <p className="text-sm text-[#b6b3b3d0]">
              <span className="font-medium text-white">Release Year:</span>{" "}
              {releaseYear}
            </p>

            {/* Rating */}
            <p className="text-sm text-[#b6b3b3d0]">
              <span className="font-medium text-white">Rating:</span> {rating}
            </p>
            {/* Summary */}
            <p className="text-sm text-[#b6b3b3d0] ">
              <span className="font-medium text-white">Summary:</span> {summary}
            </p>

            {/* See Details Butonsss */}
            {/* <div className="flex gap-4">
              <Link to={`/update-movie/${_id}`}>
                <button className="btn-info btn text-white font-medium rounded ">
                  <FaPen />
                </button>
              </Link>
              <button
                onClick={handleAddToFav}
                className=" px-4 py-2 bg-[#37f51e] text-white font-medium rounded "
              >
                <FaHeart />
              </button>

              <button
                onClick={() => {
                  if (user && user?.email === addByEmail) {
                    handleDelete(_id);
                  } else {
                    Swal.fire({
                      icon: "error",
                      text: "You can't delete this movie. It was added by another user.",
                    });
                  }
                }}
                className="btn btn-error text-white font-medium rounded "
              >
                <MdDelete />
              </button>
            </div> */}
            <div className="flex gap-4">
              {/* Edit Button */}
              {user && user?.email === addByEmail ? (
                <Link to={`/update-movie/${_id}`}>
                  <button className="btn-info btn text-white font-medium rounded ">
                    <FaPen />
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    Swal.fire({
                      icon: "error",
                      text: "You can't edit this movie. It was added by another user.",
                    });
                  }}
                  className="btn-info btn text-white font-medium rounded "
                >
                  <FaPen />
                </button>
              )}

              {/* Add to Favorites Button */}
              <button
                onClick={handleAddToFav}
                className="px-4 py-2 bg-[#37f51e] text-white font-medium rounded "
              >
                <FaHeart />
              </button>

              {/* Delete Button */}
              <button
                onClick={() => {
                  if (user && user?.email === addByEmail) {
                    handleDelete(_id);
                  } else {
                    Swal.fire({
                      icon: "error",
                      text: "You can't delete this movie. It was added by another user.",
                    });
                  }
                }}
                className="btn btn-error text-white font-medium rounded "
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovDetails;
