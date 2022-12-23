import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import Fade from 'react-reveal/Fade';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aldyvx5', 'template_dk3nkm8', form.current, 'XjJE52L18M25XKyKM')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Fade left> 
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>huacchillocastillo@gmail.com</h5><a href="mailto:huacchillocastillo@gmail.com">Send a Message</a>
          </article>
          </Fade>
          
          <Fade left>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Abraham Huacchillo</h5><a href="https://m.me/abraham.huacchillo">Send a Message</a>
          </article>
          </Fade>

          <Fade left>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whats App</h4>
            <h5>+992487774</h5><a href="https://api.whatsapp.com/send?phone=992487774">Send a Message</a>
          </article>
          </Fade>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact