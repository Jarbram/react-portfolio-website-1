import React from 'react'
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs'
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    
    <footer>
    <Fade bottom>
      <a href="#" className="footer__logo">AH</a>
      <ul className="permalinks">
        <li><a href="">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/abraham-moises-huacchillo-castillo-7630b1210/"><BsLinkedin /></a>
        <a href="https://www.instagram.com/abrahamhuacchillo/?hl=es-la"> <FaInstagram /> </a>
        <a href="https://github.com/Jarbram"> <BsGithub /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abraham Huacchillo. All rights reserved.</small>
      </div>
      </Fade>
    </footer>
  )
}

export default Footer