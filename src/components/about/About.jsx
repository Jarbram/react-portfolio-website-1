import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <Fade left>
            <article className="about__card">
              <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years working</small>
            </article>
            </Fade>

            <Fade bottom>
            <article className="about__card">
              <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>2+ Local business</small>
            </article>
            </Fade>

            <Fade right>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
            </article>
            </Fade>
          </div>
          <Pulse>
          <p>Hello, I am 23 years old, I am finishing a degree in business administration, and starting in the world of programming, I am still learning about new technologies from professionals in the sector, I hope to become a professional who can contribute to development from the future. </p></Pulse>
          <div className="btn-container">
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About