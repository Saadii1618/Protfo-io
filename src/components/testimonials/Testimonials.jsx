import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/UBI.jpg'
//import AVTR2 from '../../assests/TR.jpg'
import AVTR3 from '../../assests/AM.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'



const data =[
  {
    avatar: AVTR1,
    name: 'Usman Bin Imran',
    position: 'CEO & Founder DATXOC',
    review: <h5>"Abdullah's expertise in the field of technology is remarkable. His deep understanding of cutting-edge technologies and ability to apply them in practical ways have significantly propelled our company's growth. One of Abdullah's most remarkable qualities is his strong leadership. He has an extraordinary knack for identifying opportunities and implementing solutions that meet business objectives but also exceed our client's expectations. I wholeheartedly recommend Abdullah for any leadership or technical position."</h5>
  },
  // {
  //   avatar: AVTR2,
  //   name: 'Tausif Ul Rehman',
  //   position: 'CEO & Founder GlowingSoft Technologies',
  //   review: <h5>"Abdullah's expertise in the field of technology is remarkable. His deep understanding of cutting-edge technologies and ability to apply them in practical ways have significantly propelled our company's growth. One of Abdullah's most remarkable qualities is his strong leadership. He has an extraordinary knack for identifying opportunities and implementing solutions that meet business objectives but also exceed our client's expectations. I wholeheartedly recommend Abdullah for any leadership or technical position."</h5>
  // },
  {
    avatar: AVTR3,
    name: 'Ahsan Mehmood',
    position: 'Software Engineer & Full Stack Developer',
    review: <h5>"Abdullah is known for his excellent problem-solving skills and his ability to approach challenges with a positive attitude. Abdullah's skills as a web developer and his unwavering dedication to excellence make him a valuable asset to any organization."</h5>
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What Professionals' Says</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container'
        // install Swiper modules
      pagination={{ clickable: true }}
      modules={[Pagination]} spaceBetween={50}
      slidesPerView={1}
      //navigation = {{draggable: true}}
      
      // scrollbar={{ draggable: true }}
        
      >


      {
        data.map(({avatar, name, position, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonials'>
          <div className='client_avatar'>
            <img src={avatar} alt=''/>            
          </div>
          <h4 className='client_name'>{name}</h4>
          <h5 className='client_position'>{position}</h5>
          <small className='client_review'>{review}</small>
        </SwiperSlide>

          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials