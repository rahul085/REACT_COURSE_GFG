import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
    const onButtonClick=()=>{
     navigate('/about')
    }
  return (
    <div>
        <h1>Welcome to Home Page</h1>
        <button className='border rounded bg-gray-700 text-white px-5 py-2' onClick={onButtonClick}>Go to About</button>
    </div>
  )
}

export default Home