import "./styles.css";
import React from "react";
import Button from "../../components/Button/Button";
import SlideShow from "../../components/SlideShow/SlideShow";
import trimmers from "../../assets/trimmers.png";
import straightener from "../../assets/straightener.png";
import graduateOne from "../../assets/graduate-1.jpg";
import graduateTwo from "../../assets/graduate-2.jpg";
import graduateThree from "../../assets/graduate-3.jpg";
import graduateFour from "../../assets/graduate-4.jpg";
import graduateFive from "../../assets/graduate-5.jpg";
import graduateSix from "../../assets/graduate-6.jpg";
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
    {
      image: graduateThree,
      alt: "graduate",
    },
    {
      image: graduateFour,
      alt: "graduate",
    },
    {
      image: graduateFive,
      alt: "graduate",
    },
    {
      image: graduateSix,
      alt: "graduate",
    },
  ];

  return (
    <div className="Hero">
      {/* <div className={`sphere ${darkMode ? "dark-sphere" : "light-sphere"}`}></div> */}
      <div className="hero-wrapper">
        <div className="hero-left">
          <div className="spanish-speaking">
            <span>Se Habla Español</span>
          </div>
          <h1>San Bernardino Cuts Barbering and Cosmetology Institute</h1>
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
