import React from "react";
import IN from "../../Assets/insta.png";
import FB from "../../Assets/fb.png";
import "./header.css";
import Icon from "../Icon/Icon";
const headerSocials = () => {

  return (
    <div className="header__socials">
     
      <Icon href={"https://www.instagram.com/k4m4ch0/" } target="__blank"
       src={IN}/>
      <Icon href="https://www.facebook.com/profile.php?id=100076193534743" src={FB} target="__blank"/>
    </div>
  );
};

export default headerSocials;