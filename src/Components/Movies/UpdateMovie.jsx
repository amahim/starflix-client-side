import React, { useContext, useState, useEffect } from "react";
import { MdMovie } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Rating } from "react-simple-star-rating";
import { FaArrowCircleLeft } from "react-icons/fa";

const UpdateMovie = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const movie = useLoaderData();
  const [rating, setRating] = useState(movie?.rating || 0);

  const genres = ["Comedy", "Drama", "Horror", "Action", "Sci-Fi", "Fantasy"];
  const years = ["2024", "2023", "2022", "2021", "2020"];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (movie) {
      setValue("poster", movie.poster);
      setValue("title", movie.title);
      setValue("genre", movie.genre);
      setValue("releaseYear", movie.releaseYear);
      setValue("duration", movie.duration);
      setValue("summary", movie.summary);
    }
  }, [movie, setValue]);

  const onSubmit = (data) => {
    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    const updatedMovie = {
      ...data,
      rating,
      addByEmail: user?.email,
    };

    fetch(`https://starflix-server.vercel.app/movies/${movie._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("Movie updated successfully!");
          navigate("/all-movies");
        } else {
          toast.error("Failed to update movie.");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong.");
      });
  };

  return (
    <div>
      <div className="py-5 text-center flex gap-2 justify-center items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          Update Movie
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          <MdMovie />
        </p>
      </div>
      <div className="w-4/5 mx-auto py-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white text-lg md:text-xl px-4 py-2 rounded-md"
        >
          <FaArrowCircleLeft /> Go Back
        </button>
      </div>
      <div className="w-4/5 mx-auto pb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Movie Poster */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Poster URL</span>
            </label>
            <input
              type="url"
              {...register("poster", {
                required: "Movie poster URL is required.",
                pattern: {
                  value: /^https?:\/\//,
                  message: "Please enter a valid URL.",
                },
              })}
              placeholder="https://example.com/poster.jpg"
              className="input input-bordered w-full"
            />
            {errors.poster && (
              <p className="text-red-600 text-sm">{errors.poster.message}</p>
            )}
          </div>

          {/* Movie Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Title</span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Movie title is required.",
                minLength: {
                  value: 2,
                  message: "Title must be at least 2 characters long.",
                },
              })}
              placeholder="Movie Title"
              className="input input-bordered w-full"
            />
            {errors.title && (
              <p className="text-red-600 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Genre and Release Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <select
                {...register("genre", {
                  required: "Genre is required.",
                })}
                className="select select-bordered w-full"
              >
                <option value="">Select Genre</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              {errors.genre && (
                <p className="text-red-600 text-sm">{errors.genre.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Release Year</span>
              </label>
              <select
                {...register("releaseYear", {
                  required: "Release year is required.",
                })}
                className="select select-bordered w-full"
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.releaseYear && (
                <p className="text-red-600 text-sm">
                  {errors.releaseYear.message}
                </p>
              )}
            </div>
          </div>

          {/* Duration and Rating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Duration (minutes)</span>
              </label>
              <input
                type="number"
                {...register("duration", {
                  required: "Duration is required.",
                  min: {
                    value: 60,
                    message: "Duration must be greater than 60 minutes.",
                  },
                })}
                placeholder="Duration in minutes"
                className="input input-bordered w-full"
              />
              {errors.duration && (
                <p className="text-red-600 text-sm">
                  {errors.duration.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <div className="flex items-center">
                <Rating
                  onClick={(rate) => {
                    setRating(rate);
                    setValue("rating", rate);
                  }}
                  ratingValue={rating}
                  size={30}
                  fillColor="#37f51e"
                  emptyColor="#ccc"
                />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <textarea
              {...register("summary", {
                required: "Summary is required.",
                minLength: {
                  value: 10,
                  message: "Summary must be at least 10 characters long.",
                },
              })}
              placeholder="Write a short summary of the movie..."
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
            {errors.summary && (
              <p className="text-red-600 text-sm">{errors.summary.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-[#37f51e] text-white w-full"
            >
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
