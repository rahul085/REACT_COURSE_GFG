import { setMovies } from "../slices/movieSlice";
const API_KEY="11be2d16a910270c2063e0333712c02c";
const BASE_URL="https://api.themoviedb.org/3";

export const getMovies=()=> async dispatch=>{
    const url=`${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    try{
        const response=await fetch(url);
        const data=await response.json();
        dispatch(setMovies(data.results));
        return data.results;


    } catch(error){
        return error;
    }
}