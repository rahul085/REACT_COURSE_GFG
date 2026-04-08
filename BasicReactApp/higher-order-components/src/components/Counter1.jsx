import React, { useState } from 'react'
import { HigherOrderComponent } from './Hoc'

const Counter1 = ({count,handleClick}) => {
   
  return (
    <div>
        <span>Counter1::</span>
        <button onClick={handleClick}>Clicked -{count} times</button>
    </div>
  )
}

export default HigherOrderComponent(Counter1);