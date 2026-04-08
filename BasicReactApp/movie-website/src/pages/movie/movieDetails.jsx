import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieDetails = () => {
  const { movies } = useSelector((state) => state.movies);

  const { id } = useParams();
  const selectedMovie = movies.find((movie) => movie.id === Number(id));

  const { overview } = selectedMovie;

  if (!selectedMovie) {
    return (
      <div className="p-10 text-center text-2xl ">
        Loading movie details.....
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center justify-center bg-[#233142] h-[30%]  w-full   p-5 ">
      <h1 className="text-4xl font-black mb-8 uppercase text-white ">
        Movie details
      </h1>
      <MovieCard movie={selectedMovie} />
      <div className="mt-8 max-w-2xl text-center">
        <p className="text-white italic mb-2">overview</p>
        <p className="text-lg leading-relaxed text-white">{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
