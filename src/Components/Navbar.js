import React from 'react'
import '../App'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
    <Link to='/'><h3>Home</h3></Link>
    <div ><h1>React Book App</h1></div>
    
    <div >
    
    
      <Link to ='/favorites'>
      <h3>Your Favorites</h3></Link>
    </div>

    </div>
  )
}

export default Navbar