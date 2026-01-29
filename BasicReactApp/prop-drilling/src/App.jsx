import React from 'react'
import { useState } from 'react'
import Button from './component/button/Button';
import { useCount } from './context/count-context';
import Text from './component/text/Text';
import Navbar from './component/Navbar';
import { PRODUCTS } from './db/Products';
import Products from './component/Products';
import { useCart } from './context/cart-context';
const App = () => {
  const{cart}=useCart();
  console.log(cart);
  
  
  return (
    <div>
     <Navbar/>
    <h1 className='text-xl font-bold mt-5 mb-5'>PRODUCTS</h1>
    <div className='grid grid-cols-3 gap-4 rounded-lg '>
          
    {
      PRODUCTS ?.length>0 && PRODUCTS.map(product=>(
        <Products key={product.id} product={product}/>
      ))
    }
    
    </div>

    </div>
  )
}

export default App




/**
 * GETTING STARTED WITH USECONTEXT   
 * 
 * import React from 'react'
import { useState } from 'react'
import Button from './component/button/Button';
import { useCount } from './context/count-context';
import Text from './component/text/Text';

const App = () => {
  
  
  return (
    <div>

      <Button />
    
    </div>
  )
}

export default App
 */