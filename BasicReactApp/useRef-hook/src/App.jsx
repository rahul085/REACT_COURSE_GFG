import React from 'react'
// useRef is a React Hook that lets you reference a value that’s not needed for rendering.
import {useRef,useState,forwardRef} from 'react'
const MyButton= forwardRef((props,ref)=>{
  console.log(props);
  return(<>
    <input type="text" ref={ref} placeholder='search....' />
  </>)
})


const App = () => {
  const inputRef=useRef();
  const onFocusClick=()=>{
    inputRef.current.focus();
  }
  return(<>
  <MyButton placeholder='search' ref={inputRef}/>
     
     <button onClick={onFocusClick}>Focus on input</button>
  </>)
}

export default App




//----------------------------Importance of useRef----------------------------------------------


// const App = () => {
//   const [count,setCount]=useState(0);
//   const timerRef=useRef("");

//   const onStart =()=>{
//     timerRef.current=setInterval(()=>{
//       setCount(prev=>prev+1)
//     },1000)
//     console.log(timerRef.current);
    
    
//   }

//   const onStop=()=>{
//    clearInterval(timerRef.current)
//    console.log(timerRef.current);
   
   
//   }
 
  
//   return (
//     <div>
//       <button onClick={onStart}>Start</button>
//       <span>{" "}{count}</span>
//       <button onClick={onStop}>Stop</button>
      
//     </div>
//   )
// }

// export default App





//---------------------------------- focusing on the input when the button is clicked---------------------------------------
// THE BELOW CODE ALSO EXPLAIN ABOUT HOW CAN ANYONE PASS THE REF (FORWARDING THE REF)






/*import {useRef,useState,forwardRef} from 'react'
const MyButton= forwardRef((props,ref)=>{
  console.log(props);
  return(<>
    <input type="text" ref={ref} placeholder='search....' />
  </>)
})


const App = () => {
  const inputRef=useRef();
  const onFocusClick=()=>{
    inputRef.current.focus();
  }
  return(<>
  <MyButton placeholder='search' ref={inputRef}/>
     
     <button onClick={onFocusClick}>Focus on input</button>
  </>)
}

export default App*/


