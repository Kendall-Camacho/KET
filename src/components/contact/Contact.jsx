import React, { useRef } from "react";
import gh from "../../Assets/gh.png";
import fb from "../../Assets/fb.png";
import linkedin from "../../Assets/insta.png";
import mail from "../../Assets/mail.png";
import emailjs from "emailjs-com";

import "./contact.css";
const Contact = () => {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lykt99u",
      "template_tbueodm",
      form.current,
      "SNv1wtNENLGEHALq_"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <img alt="" src={mail} className="img" />
            <h4>Email</h4>
            <h5>For Bussines</h5>
            <a href="mailto:kencamacho19@gmail.com" target="__blank">
              <u>Open email</u>
            </a>
          </article>

          <article className="contact_option">
            <img alt="" src={linkedin} className="img" />
            <h4>Instagram</h4>
            <h5>KET</h5>
            <a
              href="https://www.instagram.com/k4m4ch0/"
              target="__blank"
            >
              Open Instagram
            </a>
          </article>

          

          <article className="contact_option">
            <img alt="" src={fb} className="img" />
            <h4>Facebook</h4>
            <h5>KET</h5>
            <a href="https://www.facebook.com" target="__blank">
              Message us on Facebook
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />

          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn" type="submit">
            <h3>Send Message</h3>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
