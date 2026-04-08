import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
    const onButtonClick=()=>{
        navigate('/contact')
    }
  return (
    <div>
        <h1>Welcome to About page</h1>
            <button className='border rounded bg-gray-700 text-white px-5 py-2' onClick={onButtonClick}>Go to Contact page</button>

    </div>
  )
}

export default About