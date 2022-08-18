import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import styled from "styled-components";

const Linkedin = "https://www.linkedin.com/in/shay-wacker-233854208/";
const Github = "https://github.com/shay2442";


function Contact() {
  const navigate=useNavigate()

  function getResume() {
    navigate("/resume")
  }
  
  return (
    <div className="contact section__padding">
      <div className="contact-heading">
        <h1 className="gradient__text"> Contact </h1>
      </div>
      <div className="contact__div-container">
        <Wrapper href={Github}>
          <AiFillGithub size="5rem" color="white" />
          <Link className="gradient__text"> Github </Link>
        </Wrapper>
        <Wrapper href={Linkedin}>
          <AiFillLinkedin size="5rem" color="white" />
          <Link className="gradient__text">LinkedIn</Link>
        </Wrapper>
        <Wrapper onClick={getResume}>Resume</Wrapper>

        
      </div>
    </div>
  );
}
export default Contact;

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Link = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 75px;
  letter-spacing: 0.04em;
  font-family: var(--font-family);
`;

    
  
