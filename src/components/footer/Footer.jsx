import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Saad Bin Nadeem</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Favourite Personality</a></li>
        {/* <li><a href='#certificates'>Certificates & Badges</a></li> */}
        <li><a href='#testimonials'>Testimonials</a></li>        
        <li><a href='#contact'>Contact Me</a></li>
      </ul>

      <div className='footer_socials'>
      <a href='https://www.linkedin.com/in/saad-nadeem-1bbb9a269/' target='_blanl'><BsLinkedin/></a>
        <a href='https://github.com/Saadii1618/mygithub' target='_blanl'><FaGithub/></a>
        <a href='https://instagram.com/saadnadeem_6?igshid=OGQ5ZDc2ODk2ZA==' target='_blanl'><BsInstagram/></a>
      </div>

      <div className='footer_copyright'>
        <small>Copyright &copy; 2023 Saad Bin Nadeem, All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer