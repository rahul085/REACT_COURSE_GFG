import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import { setFavorites } from "../../slices/movieSlice";
import { useDispatch,useSelector } from "react-redux";

const MovieCard = ({ movie }) => {
  const { id, original_title, poster_path, vote_average } = movie;
  const [bookMarked, setBookMarked] = useState(false);

  const {favorites}=useSelector(state=>state.movies);
  

   const isBookmarked = favorites.includes(id);
  
  const dispatch=useDispatch();

  const onBookMarkClick = () => {
    
    
    dispatch(setFavorites(id));
    console.log("favorites",favorites)
    setBookMarked(!bookMarked);
  };

  

  const image_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      onClick={onCardClick}
      style={{ backgroundImage: `url(${image_url})` }}
      className=" cursor-pointer h-108 w-60 rounded-xl  flex flex-col items-center justify-between  bg-cover bg-center hover:scale-105 transition-transform overflow-hidden "
    >
      <div className="pl-51">
        {
          bookMarked
          ? <RiBookmarkFill size={50} onClick={onBookMarkClick} />
          : <RiBookmarkLine size={50} onClick={onBookMarkClick} />
        }
        
      </div>

      <p className="w-full rounded-xl pb-2 pl-2 text-white  text-3xl font-bold bg-gradient-to-t from-black via-gray-900 to-transparent">
        {original_title}
      </p>
    </div>
  );
};

export default MovieCard;
