import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Resume">Resume</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/LiveCoding">Live Coding</Link>
      {/* <Link to="/Email">📧</Link> */}
    </div>
  );
};

export default Navbar;
