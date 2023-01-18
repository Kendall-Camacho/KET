import React from "react";
import check from "../../Assets/check.png";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h2>Kits</h2>
      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>No Plastic Kit</h3>
          </div>

          <ul className="service__list">
            <li>
              <img src={check} alt="" className="icon" />
              <p>Bamboo Flask</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Coco Bowl</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Bamboo Cutlery</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Reusable Napkin</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Something else</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Non-Chemical kit</h3>
          </div>

          <ul className="service__list">
            <li>
              <img src={check} alt="" className="icon" />
              <p>SunScreen</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Lip Balm</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>insect repellent</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Something else</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Something else</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Something else kit </h3>
          </div>

          <ul className="service__list">
            <li>
              <img src={check} alt="" className="icon" />
              <p>Sun Glases</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Towel</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Hat</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>Face Mask</p>
            </li>
            <li>
              <img src={check} alt="" className="icon" />
              <p>bottle</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
