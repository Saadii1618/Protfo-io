import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__languages'>
          <h3>Languages and Frameworks</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React.JS</h4>
                <small className='text-light'>Experienced</small>
              </div>               
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Node.JS</h4>
                <small className='text-light'>Experienced</small>
              </div>               
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>               
            </article>
         
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML, CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Assembly</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>


        <div className='experience__technologies'>
        <h3>Technologies</h3>
          <div className='experience__content'>
         
       
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Software Development</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            
          </div>          
        </div> 
      
        <div className='experience__tools'>
        <h3>Tools</h3>
          <div className='experience__content'>
          
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MS Visual Studio</h4>
                <small className='text-light'>Trained</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Visual Studio Code</h4>
                <small className='text-light'>Trained</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Google Colab</h4>
                <small className='text-light'>Trained</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>          
        </div> 

        <div className='experience__tools'>
        <h3>Organizational Skills</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Project Management</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Communication</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Business Development</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Presentation & Marketing</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>          
        </div> 
      </div>
    </section>
  )
}

export default Experience