import React from 'react'
import './services.css' 
import {BiCheck} from 'react-icons/bi'
import Slide from 'react-reveal/Slide';


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

            <Slide top>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Create tools that improve the interaction between user and web.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Structure the content semantically</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ensure accessibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Control fonts, templates, design forms and interactivity.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Program, change and maintain a website.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Adapt the design of a website to various devices and browsers.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Use APIs to connect the web with services and systems.</p>
            </li>
          </ul>
        </article>
        </Slide>
        {/*END WEB Development */}

        <Slide top>

        <article className="service">
          <div className="service__head">
            <h3>Business Administrator</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Help organizations run efficiently and meet their short- and long-term goals.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Keeping a business organization running</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Plan, organize and direct the control of a society</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Solve day-to-day problems that arise in the organization</p>
            </li>
            
          </ul>
        </article>
        </Slide>
        {/*END CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services