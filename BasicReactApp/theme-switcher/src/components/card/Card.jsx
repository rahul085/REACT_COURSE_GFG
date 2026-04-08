import React from 'react'
import useTheme from '../../context/theme-context'

const Card = () => {
    let {theme,setTheme}=useTheme();
    

    const onSwitchClick=()=>{
        setTheme((prev)=>prev==='light'?'dark':'light')
        console.log(theme)
    }

  return (
    <div className={`flex flex-col  items-center   border ${theme==='light'?'bg-white border-gray-200 text-gray-900':'bg-slate-900 border-slate-700 text-white'} shadow-xl rounded-lg max-w-5xl w-[30%] h-[60%] `}>
        <div className='w-[80%] h-[60%] border-none bg-blue-400 flex flex-col m-5 items-center rounded-xl  justify-center '>
            <span className='flex items-center justify-center text-center text-5xl '>🎧</span>
        </div>

        <div className='flex flex-col items-start justify-center px-4 w-full'>
            <h1 className={`text-2xl  font-bold font-sans transition-all duration-500 ${theme==='light'?'text-black':'text-white'}`}>Wireless headphones</h1>
        </div>

        <div className={`flex justify-center items-center mt-2 transition-all duration-500 ${theme==='light'?'text-black':'text-white'}`}>
            <p className=' text-gray-500 italic text-center  '>These are the high quality headphones with 50 hour battery life</p>
        </div>

        <div className='flex items-center justify-between w-full'>
            <span className={`text-xl font-bold ml-2 transition-all duration-500 ${theme==='light'?'text-black':'text-white'}`}>$20/-</span>
            <span className={`border-none rounded-xl px-3 py-1 mr-2 transition-all duration-500 ${theme==='light'?'bg-green-100 text-green-700':'bg-green-900'}  text-green-400`}>in stock</span>
        </div>

        <div>
            <button onClick={onSwitchClick} className={`border rounded-xl bg-gray-600 text-white px-5 py-1 mb-3 mt-2 cursor-pointer`}>Switch to{theme ===' dark '? ' light ': ' dark '}mode</button>
        </div>


    </div>
  )
}

export default Card