import { createSlice } from "@reduxjs/toolkit";
 
const initialState={
    movies:[],
    favorites:[],
    searchTerm:"",
}

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.movies=action.payload
        },
        setSearchTerm:(state,action)=>{
             state.searchTerm=action.payload
        },
        setFavorites:(state,action)=>{
            state.favorites.push(action.payload)
        }

    }
})

export const {setMovies,setSearchTerm,setFavorites}=movieSlice.actions;
export default movieSlice.reducer