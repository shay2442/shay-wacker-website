import React from "react";

import {
  MainContainer,
  Image,
  MainContentContainer,
  Description,
  LinkContainer,
  Links,
  Title,
} from "./ProjectStyles";
function Projects({ imgUrl, title, link, github, description }) {
  return (
     <div>
    <div className="projectsContainer">

    {/* <input type="image" src="https://buy-the-room-frontend.herokuapp.com/" /> */}

    {/* <button onclick="myFunction()"><img src="y"/></button> */}
    <button>Hello</button>


    </div>
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
      </div>
  );
}

export default Projects;