import React from 'react'
import { PRODUCTS } from '../db/Products'
import { useCart } from '../context/cart-context'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

     const {cartDispatch}=useCart();
     const navigate=useNavigate();
    const onAddToCartClick=()=>{
        cartDispatch(
            {type:'ADD_TO_CART',
                payload: product
            }
        )
       

    }

    const onRemoveFromCartClick=()=>{
        cartDispatch(
            {type:"REMOVE",
                payload: product
            }
        )
    }

    const onTitleClick=()=>{
        navigate(`/productDetails/${product.id}`)
        
    }
  return (
   <div className='flex flex-col text-center items-center border px-7 py-10 m-5 rounded'>
    <div onClick={onTitleClick} >
         <p className='font-bold'>{product.title}</p>
    </div>

    <div className='flex gap-2'>
        <p >Price:-{product.price} ||</p>
        <p>Discount:-{product.discountPercentage} ||</p>
        <p>Rating:-{product.rating} ||</p>
    </div>

    <div>
        <button onClick={onAddToCartClick} className='border rounded-xl bg-gray-600 text-white px-4 py-2 mt-5'>Add to cart</button>
        <button onClick={onRemoveFromCartClick} className='border rounded-xl bg-gray-600 text-white px-4 py-2 mt-5'>Remove from cart</button>
    </div>
   

   </div>
  )
}

export default ProductCard