import React from 'react'
import './certificates.css'

const Certificates = () => {
  return (
    <section id='certificates'>
        <h5>My Activities</h5>
        <h2>Certificates & Badges</h2>
        <div className='container certificates_container'>
            <article className='certificate'>
                <div className='certificate_head'>
                    <h3>Google DSC Lead 2022-2023</h3>
                    
                </div>
                <div className='btn btn-certificate'> <a href='https://g.dev/abdullahsattar' target='_blanl'>View</a></div>
                
            </article>
            <article className='certificate'>
                <div className='certificate_head'>
                    <h3>Foundation of Project Management by Google</h3>
                </div>
                <div className='btn btn-certificate'> <a href='https://coursera.org/verify/86FP9X9NBC8X' target='_blanl'>View</a></div>
                
            </article>
            <article className='certificate'>
                <div className='certificate_head'>
                    <h3>Project Management Tracker using Microsoft Excel</h3>
                </div>
                <div className='btn btn-certificate'><a href='https://coursera.org/verify/79X7HA9Q4MFK' target='_blanl'>View</a> </div>
                
            </article>

        </div>
    </section>
  )
}

export default Certificates