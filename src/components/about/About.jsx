import React from "react";
import "./about.css";
import ME from "../../assests/me6.jpeg";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/* <FaAward className="about__icon" /> */}
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              {/* <FiUsers className="about__icon" /> */}
              <h5>Clients</h5>
              <small>20+</small>
            </article>
            <article className="about__card">
              {/* <AiOutlineFundProjectionScreen className="about__icon" /> */}
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p className="para">
            Innovative Software Engineer drove by a passion for technology.
            UMT Computer Scientist with skills in C++, HTML, and
            MERN.{" "}
          </p>
          <p className="para">
            My interests challenge me to create diversity and give me the
            opportunity to learn new things related to technology, business, and
            the philosophy of life. In meantime, I love to read books and
            internet surfing to gather new knowledge.
          </p>
          <p className="para">Will be happy to connect with you!</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
