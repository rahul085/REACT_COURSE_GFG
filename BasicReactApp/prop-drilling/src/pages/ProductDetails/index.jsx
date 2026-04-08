import { useParams } from "react-router-dom"
import { PRODUCTS } from "../../db/Products";

export const ProductDetails=()=>{
    const params=useParams();
    console.log(params);
    const selectedProduct=PRODUCTS.find(({id})=>Number(params.id)===id);
    console.log(selectedProduct)
    
    
    return(<>
    <h1>{selectedProduct.title}</h1>
    
    </>)
}