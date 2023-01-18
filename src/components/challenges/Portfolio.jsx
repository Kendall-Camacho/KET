import React from "react";
import pf1 from "../../Assets/Challenge1.jpg";
import pf2 from "../../Assets/Challenge2.jpg";
import pf3 from "../../Assets/Challen3.jpg";
import pf4 from "../../Assets/Challenge4.jpg";
import pf5 from "../../Assets/Challenge5.png";
import pf6 from "../../Assets/Challenge6.jpg";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Challenges</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf1} alt="" />
          </div>
          <h3>This is a Challenge Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Go
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf2} alt="" />
          </div>
          <h3>This is a Challenge Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Go
            </a>
            {/* <a
              target="__blank"
              className="btn btn-primary"
            >
              Live Demo
              button example for later
            </a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf3} alt="" />
          </div>
          <h3>This is a Challenge Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Go
            </a>
            
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf4} alt="" />
          </div>
          <h3>This is a Challenge Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Go
            </a>
            
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf5} alt="" />
          </div>
          <h3>This is a Challenge Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Go
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf6} alt="" />
          </div>
          <h3>This is a Challenge Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Go
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
