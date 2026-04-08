


import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies";
import MovieCard from "../../components/movieCard";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  console.log(movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-3  gap-5 m-5">
        {movies?.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

      </main>
       
    </>
  );
};

export default Home;
