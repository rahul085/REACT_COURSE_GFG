import React from 'react'
import Card from './components/card/Card'
import useTheme from './context/theme-context'

const App = () => {
  const {theme}=useTheme();
  return (
    <div className={`w-full h-screen flex ${theme==='light'?'bg-white ':'bg-slate-900'} transition-colors duration-500 items-center justify-center  `}>
     <Card/> 

      
    </div>
  )
}

export default App