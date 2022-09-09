import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineMail
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
    <Link to="home">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/LiveCoding">Live Coding</Link>
        <Link to="/Email">📧</Link>
        
        {/* <AiOutlineMail size="5rem" color="black" />
          <Link className="gradient__text"> Twitter </Link> */}
 
</div>
  )
}

export default Navbar