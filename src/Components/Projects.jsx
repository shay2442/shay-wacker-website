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
      <input id="project-image" onClick={() => window.location.replace('https://buy-the-room-frontend.herokuapp.com/rooms')}className="video-images" type="image" src="/buytheroompic.png" />
      <input id="project-image" onClick={() => window.location.replace('https://www.loom.com/share/3c86f6b2ed3948b4bf3c33a80299a871')}className="video-images" type="image" src="mfp.png" />
      </div>
      
      
      
      </div>
  );
}

export default Projects;