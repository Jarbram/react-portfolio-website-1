import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/abraham-moises-huacchillo-castillo-7630b1210/" target="_blank">
            <BsLinkedin/>
        </a>
        <a href="https://github.com/Jarbram" target="_blank">
            <FaGithub />
        </a>
        <a href="https://www.instagram.com/abrahamhuacchillo/?hl=es-la" target="_blank">
            <FaInstagram />
        </a>
    </div>
  )
}

export default HeaderSocial