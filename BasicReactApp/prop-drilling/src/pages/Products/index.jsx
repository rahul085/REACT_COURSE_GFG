import Navbar from "../../component/Navbar"
import { PRODUCTS } from "../../db/Products"
import ProductCard from "../../component/ProductCard"

export const Products=()=>{
    return(
         <div>
     <Navbar  />
    <h1 className='text-xl font-bold mt-5 mb-5'>PRODUCTS</h1>
    <div className='grid grid-cols-3 gap-4 rounded-lg '>
          
    {
      PRODUCTS ?.length>0 && PRODUCTS.map(product=>(
        <ProductCard key={product.id} product={product}/>
      ))
    }
    
    </div>

    </div>
    )

}