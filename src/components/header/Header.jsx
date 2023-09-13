import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hey! I am</h5>
        <h1>Saad Bin Nadeem</h1>
        <h5 className='text-light'>Innovative Software Engineer driven by a passion for Technology</h5>
        <h5 className='text-light'>Entrepreneur | Computer Engineer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
          
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        

      </div>
    </header>
  )
}

export default Header