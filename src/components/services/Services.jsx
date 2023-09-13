import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'
import image1 from '../../assests/jeff.jpg' 
import image2 from '../../assests/rock.jpg' 
import image3 from '../../assests/obaba.jpg' 
const Services = () => {
  return (
    <section id='services'>
      <h5></h5>
      <h2>Favourite Personalities</h2>

    <div className='container services__container'>
      <article className='service'>
        <div className='service_head'>
          <img src={image1} alt="" style={{ width: '300px', height: '400px' }}/>
        </div>
        <div className='service_list'>
            {/* <BsCheckLg className='service_list-icon'/> */}
            <p>Jeff Bezos</p>
        </div>
        
      </article>
      <article className='service'>
        <div className='service_head'>
          <img src={image2} alt="" style={{ width: '300px', height: '400px' }}/>
        </div>
        <div className='service_list'>
            {/* <BsCheckLg className='service_list-icon'/> */}
            <p>Dwayne Johnson</p>
        </div>
        
      </article>
      <article className='service'>
        <div className='service_head'>
          <img src={image3} alt="" style={{ width: '300px', height: '400px' }}/>
        </div>
        <div className='service_list'>
            {/* <BsCheckLg className='service_list-icon'/> */}
            <p> Barack Obama</p>
        </div>
        
      </article>

      

    </div>
    </section>
  )
}

export default Services