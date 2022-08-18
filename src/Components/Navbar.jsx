import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
    <Link to="home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Projects">Projects</Link>
        
 
</div>
  )
}

export default Navbar