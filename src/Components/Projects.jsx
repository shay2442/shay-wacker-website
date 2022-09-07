import React from "react";
import {useNavigate} from 'react-router-dom'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function Projects({}) {

  const navigate = useNavigate()


  return (
     <div className="projects-container">

  <div className="tech-pics-container"> 


    <img className="tech-pics"
        src="/js.png"
        alt="logo"
      />

<img className="tech-pics"
        src="/reactjs-ar21.svg"
        alt="logo"
      />

<img className="tech-pics"
        src="/ruby-seeklogo.com.svg"
        alt="logo"
      />
      
  <img className="tech-pics"
        src="/railspic.png"
        alt="logo"
      />
      </div>
      <div className="project">
      <input id="project-image" onClick={() => window.location.replace('https://buy-the-room-frontend.herokuapp.com/rooms')}className="button-images" type="image" src="/buytheroompic.png" />
      </div>
      </div>
  );
}

export default Projects;