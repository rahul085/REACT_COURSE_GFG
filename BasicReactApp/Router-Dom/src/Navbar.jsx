import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <div>
     
      <NavLink to="/" className={({isActive})=>isActive?'text-red-500':''}>HOME</NavLink> ||
      <NavLink  className={({isActive})=>isActive?'text-red-500':''} to="/about">ABOUT</NavLink> ||
      <NavLink  className={({isActive})=>isActive?'text-red-500':''} to="/contact">CONTACT</NavLink> ||
      <NavLink  className={({isActive})=>isActive?'text-red-500':''} to="/login">Login</NavLink> ||
    </div>
  )
}

export default Navbar