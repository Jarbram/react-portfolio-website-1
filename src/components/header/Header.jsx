import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocial'
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Abraham Huacchillo</h1>
        <CTA />
        <HeaderSocial />


        <Fade top>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        </Fade>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header