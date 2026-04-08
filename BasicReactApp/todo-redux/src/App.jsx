import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addTodo,deleteTodo } from './slices/todoSlice';
import {v4 as uuid} from 'uuid';
const App = () => {
  const [inputText,setInputText]=useState();
  const dispatch=useDispatch();

  
  
   const {todos}=useSelector(state=>state.todos);
    console.log(todos);


  const onAddClick=()=>{
    dispatch(addTodo({
      id:uuid(),
      todo:inputText
    }))
    setInputText("");
  }

  const onDeleteClick=(id)=>{
   dispatch(deleteTodo({
    id:id
   }))
   

  }

   
  return (
    <div className='w-full h-screen p-5 bg-slate-200'>
      <h1 className='text-2xl text-center text-purple-700'>TODO APP</h1>
      <div className='flex items-center justify-center gap-5 mt-5'>
        <input value={inputText} onChange={(e)=> setInputText(e.target.value)} type="text" placeholder='Enter a todo' className='border focus:border-purple-900 rounded  w-3xl' />
        <button onClick={onAddClick} className='rounded text-purple-500 border px-3 bg-gray-300'>ADD</button>
      </div>
<div>
  {todos?.length>0 && todos.map(todo=>(
    <div className='flex justify-center items-center gap-2 mt-5 '>
      <span >{todo.todo}</span>
      <button onClick={()=>onDeleteClick(todo.id)}>Delete</button>
    </div>
  ))}
</div>

    </div>
  )
}

export default App