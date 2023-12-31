import React from "react";
import logo from "../../assets/logo.png";
import { IoLocationSharp, IoPhonePortraitOutline } from "react-icons/io5";
import "./styles.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-wrapper">
        <div className="about-logo">
          <div className="logo-info">
            <img src={logo} width="100px" alt="logo" />
            <h3>San Bernardino Cuts Barbering and Cosmetology Institute</h3>
          </div>
          <p>
            We are a State Board-approved program that provides the apprentice
            with the required related supplemental training that has been
            approved by the State Board of Barbering and Cosmetology
          </p>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <div className="underline"></div>
          <ul className="contact">
            <li>
              <IoLocationSharp />
              <a href="https://maps.app.goo.gl/3hnDwSVUzLCK3B846">
                165 W Hospitality Lane Suite 13-14, San Bernardino, CA 92408
              </a>
            </li>
            <li>
              <IoPhonePortraitOutline />
              <a href="tel:+19095324644">(909) 532-4644</a>
            </li>
            <li>
              <IoPhonePortraitOutline />
              <div className="para-espanol">
                <a href="tel:+19093840792">(909) 384-0792</a>
                <p style={{ marginLeft: "1rem", fontSize: "14px" }}>
                  (Para Español)
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3>Subscribe</h3>
          <div className="underline"></div>
          <div class="ml-embedded" data-form="qczUud" id="footer-form"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
