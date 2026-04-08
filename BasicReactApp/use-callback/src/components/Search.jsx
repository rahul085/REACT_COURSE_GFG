import React from 'react'
import { memo } from 'react'; 

const Search = memo(({handleChange}) => {
    console.log("search component rendered!");
    
  return (
    <input type="text" placeholder='search' onChange={(e)=>handleChange(e.target.value)} />
  )
});

export default Search