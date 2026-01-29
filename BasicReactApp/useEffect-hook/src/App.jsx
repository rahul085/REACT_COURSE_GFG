import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const App = () => {
  return <></>;
};

export default App;

/**
 * 
 * GETTING STARTED WITH USE EFFECT
 * 
 * import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
const App = () => {
  const [count,setCount]=useState(1);
  const [products,setProducts]=useState([]);
  const onButtonClick=()=>{
    setCount(count+1)
  }

  const URL=`https://dummyjson.com/products` ;

  const getData=async (URL)=>{
    try{
      const {data: {products}}= await axios.get(URL);
      setProducts(products)
      console.log(products);
    }
    catch(err){
      return err;
    }
  }
  useEffect(()=>{
    getData(URL);
   
  //  fetch(url)
  //  .then(res=>res.json())
  //  .then(data=>console.log(data));
   

  },[count])
  return (
    <>
      <button onClick={onButtonClick}>Click-{count}</button>
      {
        products && products.length>0 && products.map(product=>(<p>{product.title}</p>))
      }
    
    </>
  )
}

export default App




// CLEAN UP FUNCTION DEMO


import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
const App = () => {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    const timerId=setInterval(()=>{
      setCount(count=>count+1)
    },1000);
 console.log("useeffect function");
 

    // this is called a clean up function. React will call this function first before executing the above function on change.
    return ()=>{
      console.log("Clean up function")
      clearInterval(timerId)
    }
  },[])


  
  return (
    <>
    <h2>Up-Counter</h2>
    <h2>{count}</h2>
    
    </>
  )
}

export default Ap
 */
