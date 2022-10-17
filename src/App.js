import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import LiveCoding from "./Components/LiveCoding";
import Email from "./Components/Email";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/LiveCoding" element={<LiveCoding />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
