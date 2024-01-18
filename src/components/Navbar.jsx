import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className='w-10 h-10 rounder-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <p className=''>KAT</p>
      </NavLink>
    </header>
  )
}

export default Navbar