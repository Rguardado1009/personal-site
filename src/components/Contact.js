import React from "react";
import "./Contact.css";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";

const Linkedin = "https://www.linkedin.com/in/ronaldguardado/";

function Contact() {
  return (
    <div className="contact section__padding">
      <div className="contact__div-container">
        <div>
          <AiFillGithub size="5rem" color="white" />
          <a className="gradient__text"> Github </a>
        </div>
        <div>
          <AiFillLinkedin size="5rem" color="white" />
          <a className="gradient__text" href={Linkedin}>
            LinkedIn
          </a>
        </div>
        <div>
          <AiFillTwitterSquare size="5rem" color="white" />
          <a className="gradient__text"> Twitter </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
