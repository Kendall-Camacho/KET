import React from "react";
import "./about.css";
import ME from "../../Assets/logo.jpg";
import about from "../../Assets/about.png";
import projects from "../../Assets/book.png";
import exp from "../../Assets/experience.png";

const About = () => {
  return (
    <section id="about">
      <h2>About us</h2>
      <h4>This project aims to promote eco-tourism and reduce carbon footprint.
        <br />
        <br />
      </h4> 
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <img alt="" src={about} className="about__icon" />
              <h5>Fact</h5>
              <small>Just Started</small>
            </article>

            <article className="about__card">
              <img alt="" src={exp} className="about__icon" />
              <h5>Fact</h5>
              <small>Just started</small>
            </article>

            <article className="about__card">
              <img alt="" src={projects} className="about__icon" />
              <h5>Some fact</h5> <small>+12</small>
            </article>
          </div>
          <p>A junior enterprise</p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
