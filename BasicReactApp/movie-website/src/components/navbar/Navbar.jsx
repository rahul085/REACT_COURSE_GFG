import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setSearchTerm } from '../../slices/movieSlice'

const Navbar = () => {
    const dispatch=useDispatch();
    

  return (
    <div className='bg-cyan-900 p-5 flex justify-between'>
        <div className='flex gap-20 '>
            <span className='text-3xl text-white'>MOVIES FOR ALL</span>
            <input onChange={(e)=>{
               dispatch(setSearchTerm(e.target.value))
            }}   className='border border-gray-400 rounded-xl px-10  text-white' type="text" placeholder='Search for movies' />
        </div>
        <div className='flex gap-5 '>
            <NavLink to="/" className={({isActive})=>isActive?'text-red-400':'text-white'}>HOME</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive?'text-red-400':'text-white'}>ABOUT</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive?'text-red-400':'text-white'}>CONTACT</NavLink>
        </div>
    </div>
  )
}

export default Navbar