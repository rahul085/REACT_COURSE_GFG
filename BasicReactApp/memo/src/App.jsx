import React from 'react'
import { useState,memo } from 'react'


/**
 *
 * 
 * In the below code whenever the state of the parent changes the parent re-renders and so the child.
 * In the code below, when the name is changed in the App component the Greetings component will also get re-rendered.
 * Later when we add another input in the app component for city , when that city is also changed, the child gets re-renderd. 
 * This can be stopped using something called Memo in react. so basically  memo is nothing but a higher order function that returns another function.
 * The thing is we have to wrap the entire child component inside memo .
 * memo is the higher order component because it is taking the component and returning a  new component(memoized component).
 * 
 * memoized component is a component in which only if the props of the component that it takes changes then only that component will be re-rendered. 
 * 
 * 
 * 
 * by using the memo HOC we stopped the unnecessary re-render for the changes in the city input. 
 * so we have optimized something........... 
 * 
 * 
 * THERE'S NO GUARANTEE THAT MEMO WORKS ALL THE TIME !!! 
 */

const Greetings= memo(function Greetings({name}){
  console.log("Component re-rendered");
  
  return (
    <>
    <h2>Hello {name}, welcome to GFG!! </h2>
    </>
  )
})


const App = () => {
  const[name,setName]=useState("");
  const [city,setCity]=useState("");
  return (
    <div>
      <h1>MEMO</h1>

      <div>
        <input type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value)} />

      </div>

      <div>
        <input type="text" placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} />
      </div>

      <div>
        <Greetings name={name}/>
      
      </div>

    </div>
  )
}

export default App