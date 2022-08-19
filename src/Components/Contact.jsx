import React from "react";
import "./Contact.css";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillFileText
} from "react-icons/ai";
import styled from "styled-components";
import PDF from "../assets/Shay Wacker Resume.pdf";

const Linkedin = "https://www.linkedin.com/in/shay-wacker-233854208/";
const Github = "https://github.com/shay2442";
const Blogs = "https://twitter.com/shayallison2442";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h1> Contact </h1>
      </div>
      <div className="contact__div-container">
        <Wrapper href={Github}>
          <AiFillGithub size="5rem" color="black" />
          <Link className="gradient__text"> Github </Link>
        </Wrapper>
        <Wrapper href={Linkedin}>
          <AiFillLinkedin size="5rem" color="Black" />
          <Link className="gradient__text">LinkedIn</Link>
        </Wrapper>
        <Wrapper href={Blogs}>
          <AiFillTwitterSquare size="5rem" color="black" />
          <Link className="gradient__text"> Twitter </Link>
        </Wrapper>
        <Wrapper href={PDF}>
          <AiFillFileText size="5rem" color="black" />
          <Link className="gradient__text"> Resume </Link>
        </Wrapper>
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
