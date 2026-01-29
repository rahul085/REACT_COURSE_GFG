import React from 'react'
import { useCart } from '../context/cart-context'
const Navbar = () => {
    const {cart}=useCart();
  return (
    <div>
        <h1 className='text-2xl font-bold '>SHOPIFY</h1>
        <p className='mt-7'>Cart count {cart.length}</p>
    </div>
  )
}

export default Navbar