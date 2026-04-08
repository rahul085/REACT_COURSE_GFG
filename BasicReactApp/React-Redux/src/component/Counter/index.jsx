import { useDispatch,useSelector } from "react-redux"
import {increment,decrement}  from "../../slices/counterSlice";

export const Counter=()=>{
    const dispatch=useDispatch();
    const {count}=useSelector(state=>state.counter);
    console.log(count);
    
    const onUpClick=()=>{
        dispatch(increment())
    }
    const onDownClick=()=>{
        dispatch(decrement())
    }
    return(
        <>
        
        <button onClick={onUpClick} className="border rounded bg-black text-white px-5 py-1 mr-2">UP</button>
        <span>{count}</span>
        <button onClick={onDownClick} className="border rounded bg-black text-white px-5 py-1 ml-2">Down</button>
        
        </>
    )
}