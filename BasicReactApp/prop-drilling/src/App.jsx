import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Products } from './pages/Products'
import { ProductDetails } from './pages/ProductDetails'
const App = () => {
  
  
  
  return (
  <Routes>
  <Route path='/' element={<Products/>}/>
  <Route path='/productDetails/:id' element={<ProductDetails/>}/>
  </Routes>
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