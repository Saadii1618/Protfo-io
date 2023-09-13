import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
// import Portfolio from './components/portfolio/Portfolio'
import Certificates from './components/certificates/Certificates'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        {/* <Portfolio/> */}
        <Certificates/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App