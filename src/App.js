import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import About from "./Components/About";
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import Resume from "./Components/Resume"
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
     <Navbar/>
     
     
      <Routes> 
      <Route  path="/home"
        element={
          <Home/>
        }
      />

      
      <Route  path="/about"
        element={
          <About/>
        }
      />
      <Route path="Contact"
      element={
        <Contact/>
      }
      />
      <Route  path="/Projects"
        element={
          <Projects/>
        }
      />
       <Route  path="/Resume"
        element={
          <Resume/>
        }
      />
      </Routes>
    </div>
  );
}

export default App;
