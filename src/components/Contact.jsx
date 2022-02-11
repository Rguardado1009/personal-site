import React from "react";
import "./Contact.css";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import styled from "styled-components";

const Linkedin = "https://www.linkedin.com/in/ronaldguardado/";
const Github = "https://github.com/Rguardado1009/";
const Twitter = "https://twitter.com/ronnie_ix";
function Contact() {
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
        <Wrapper href={Twitter}>
          <AiFillTwitterSquare size="5rem" color="white" />
          <Link className="gradient__text"> Twitter </Link>
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
