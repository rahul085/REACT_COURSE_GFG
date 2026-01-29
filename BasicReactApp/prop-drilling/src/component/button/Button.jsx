import React from 'react'
import Text from '../text/Text'
import { useCount } from '../../context/count-context'

const Button = () => {
    const {count,setCount}=useCount();
    const onButtonClick=()=>{
        setCount(count+1);


    }
  return (
    <>
    <button onClick={onButtonClick}>Increment</button>  
    <Text/>

    </>
  )
}

export default Button