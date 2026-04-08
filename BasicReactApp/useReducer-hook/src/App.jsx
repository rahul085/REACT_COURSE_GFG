import React from "react";

import { useState } from "react";
import { useReducer } from "react";
import { countReducer } from "./reducers/countReducer";
import { PRODUCTS } from "./db/products";
import { filterReducer } from "./reducers/filterReducer";

const App = () => {
const initialState={
  newPrice:"",
  newRating:"",
  newDiscountPercentage:""
}

  const [{newPrice,newRating,newDiscountPercentage},filterDispatch]=useReducer(filterReducer,initialState);

  const handlePriceFilter=(e)=>{

  filterDispatch({type:"PRICE",payload:e.target.value})
  }

  const handleDiscountFilter=(e)=>{
    filterDispatch({type:"DISCOUNT",payload:e.target.value})
  }

  const handleRatingFilter=(e)=>{
    filterDispatch({type:"RATING",payload:e.target.value})
  }

  const filteredByPrice= newPrice > 0 ? PRODUCTS.filter(({price})=> price<=newPrice):PRODUCTS;
  const filteredByDiscount= newDiscountPercentage>0 ? filteredByPrice.filter(({discountPercentage})=>discountPercentage>=newDiscountPercentage):filteredByPrice;
  const filteredByRating=newRating>0 ? filteredByDiscount.filter(({rating})=> rating>=newRating): filteredByDiscount;
  
  return (
  <div>
    <h2 className="text-2xl font-bold text-center mb-5 mt-5">PRODUCTS</h2>
    <div className="flex gap-4">
      <span>Filters</span>
      <input onChange={handlePriceFilter}  type="text" placeholder="set price limit" className="rounded border-2 border-gray-400 "/>
      <input onChange={handleDiscountFilter} type="text" placeholder="set discount" className="rounded border-2 border-gray-400 " />
      <input onChange={handleRatingFilter}  type="text" placeholder="set rating" className="rounded border-2 border-gray-400 " />
    </div>

    <div className=" grid grid-cols-3 mt-5  gap-4">
      {filteredByRating.length>0 &&filteredByRating.map(product=>(
        <div className="p-4 m-2 border-2 text-center border-black rounded-lg " key={product.id}>
          <p className="mb-5 mt-3">{product.title}</p>
          <p>Price-{product.price} || Rating- {product.rating} || Discount- {product.discountPercentage}%</p>
         
        </div>
      ))}

    </div>
     
  </div>
  )
};

export default App;

/**
 * GETTING STARTED WITH USEREDUCER HOOK
 * 
 * USE CASE:
 *   FOR ONE SINGLE COMPONENT IF THERE ARE MORE THAN THREE STATES, 
 * WE SHOULD USE A USEREDUCER HOOK. IT HAS ONE SINGLE STATE AND A REDUCER FUNCTION
 * 
 * 
 * 
 * import React from 'react'

import { useState } from 'react';
import { useReducer } from 'react'
import { countReducer } from './reducers/countReducer';

const App = () => {
  const initialState={
    count:0
  }

  const onDecClick=()=>{
    countDispatch({type:"DECREMENT"})
  }

 
 
  const [state,countDispatch]=useReducer(countReducer,initialState);
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={()=> countDispatch({type:"INCREMENT"})}>Inc</button>
      <button onClick={onDecClick}>Dec</button>
    </div>
  )
}

export default App
 */
