import "./styles.css";
import React from "react";
import Button from "../../components/Button/Button";
import SlideShow from "../../components/SlideShow/SlideShow";
import trimmers from "../../assets/trimmers.png";
import straightener from "../../assets/straightener.png";
import graduateOne from "../../assets/graduate-1.jpg";
import graduateTwo from "../../assets/graduate-2.jpg";
import logo from '../../assets/transparent-logo3.jpg'
import wave from '../../assets/wave-bg.png'
import { FaPlay } from "react-icons/fa";

function Hero({ handleEnrollmentForm, darkMode }) {

  const handleVideo = () => {
    window.open("https://www.youtube.com/watch?v=FABuKJfd2sc")
  }

  const gallery = [
    {
      image: graduateOne,
      alt: "graduate",
    },
    {
      image: graduateTwo,
      alt: "graduate",
    },
  ];

  return (
    <div className="Hero">
      {/* <div className={`sphere ${darkMode ? "dark-sphere" : "light-sphere"}`}></div> */}
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>San Bernardino Cuts and Cosmetology Institute</h1>
          <p>Cultivating the next generation of beauty industry leaders.</p>
          <Button onClick={handleEnrollmentForm} darkMode={darkMode} text="Enrol Now!" />
        </div>
        <div className="hero-right">
          <div className={`inner-hero-right ${darkMode ? "" : "dark-bg"}`}>
            <img
              className="straightener floating"
              src={straightener}
              width="150px"
              alt="straightener"
            />
            <SlideShow gallery={gallery} />
            <img
              className="trimmers floating"
              src={trimmers}
              width="150px"
              alt="trimmer"
            />
            <div className="enroll-now spinning">
              <Button
                darkMode={darkMode}
                onClick={handleVideo}
                text={<FaPlay />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
