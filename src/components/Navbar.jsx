import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className='w-10 h-10 rounder-lg items-center justify-center flex font-medium shadow-md bg-blue-400'>
       <p className="gold-gradient_text">KAT</p>
      </NavLink>
      <nav className="flex text-lg gap-8 font-medium">
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500':'text-black'}>
          WHO AM I?
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500':'text-black'}>
        Projects
        </NavLink>

      </nav>
    </header>
  )
}

export default Navbar