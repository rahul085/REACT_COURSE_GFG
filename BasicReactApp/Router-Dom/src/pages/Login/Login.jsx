import React from 'react'
import { useAuth } from '../../context/AuthContext'
const Login = () => {
    const {isLoggedIn,setIsLoggedIn}=useAuth();
    const onLoginClick=()=>{
        setIsLoggedIn(!isLoggedIn);
    }
  return (
    <div>
        <h1>This is a login Page</h1>
        {
            !isLoggedIn &&  <label >Mobile no:
                <input type="text" placeholder='enter the mobile number' maxLength={10} />
            </label>
        }
         <button onClick={onLoginClick} className='border rounded bg-gray-700 text-white px-5 py-2'>{!isLoggedIn ? 'Login':'Logout'} </button>
       
    </div>
  )
}

export default Login