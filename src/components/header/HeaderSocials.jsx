import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
   <a href='https://www.linkedin.com/in/saad-nadeem-1bbb9a269/' target='_blanl'><BsLinkedin/></a>
        <a href='https://github.com/Saadii1618/mygithub' target='_blanl'><FaGithub/></a>
        <a href='https://instagram.com/saadnadeem_6?igshid=OGQ5ZDc2ODk2ZA==' target='_blanl'><BsInstagram/></a>
      </div>
  )
}

export default HeaderSocials