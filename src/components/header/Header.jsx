import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../Assets/logo.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! we are</h5>
        <h1>K.E.T</h1>
        <h5>Entrepreneurship of 5 young people who want to have a better world :)</h5>
        <CTA />
      <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" className="" />
        </div>

        <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
