import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../../api/movies";
import Navbar from "../../components/navbar/Navbar";
import MovieCard from "../../components/MovieCard/MovieCard";
const Home = () => {
  const dispatch = useDispatch();
  const { movies, searchTerm } = useSelector((state) => state.movies);
  const filteredMovies = movies.filter((movie) =>
    movie.original_title
      .toLowerCase()
      .includes((searchTerm || "").toLowerCase()),
  );

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="w-full h-full bg-[#233142] p-10">
      <main>
        <div className="grid grid-cols-3  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
          {filteredMovies?.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="col-span-full text-center mt-10">
              <p className="text-white text-xl">
                {`No movies found for "${searchTerm}"`}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
