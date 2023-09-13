import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1gkrekc', 'template_06htr5k', form.current, 'rl7tnHYM1hNDEIB--')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>saadnadeem352@gmail.com</h5>
            <a href="mailto:abdullahsattaar@gmail.com" target='_blank'>Send Email</a>
          </article>
          {/* <article className='contact_option'>
            <BsWhatsapp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/923487838320" target='_blank'>Send Message</a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact_form'>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          {/* <input type='text' name='subject' placeholder='Subject' required/> */}
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>        
    </section>
  )
}

export default Contact