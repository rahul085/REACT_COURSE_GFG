import React from 'react'
import { HigherOrderComponent } from './Hoc';
import { useState } from 'react';
const Counter2 = ({count,handleClick}) => {
   
  return (
    <>
    <span>Counter2::</span>
    <button onClick={handleClick}>Clicked-{count} times</button>
    
    
    </>
  )
}

export default HigherOrderComponent(Counter2);