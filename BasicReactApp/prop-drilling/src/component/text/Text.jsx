import React from 'react'
import { useCount } from '../../context/count-context';
const Text = () => {
    const {count}=useCount();
  return (
    <div>
<p>The count is {count}</p>

    </div>
  )
}

export default Text