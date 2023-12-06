import "./styles.css";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import SlideShow from "../../components/SlideShow/SlideShow";
import trimmers from "../../assets/trimmers.png";
import straightener from "../../assets/straightener.png";
import graduateOne from "../../assets/graduate-1.jpg";
import graduateTwo from "../../assets/graduate-2.jpg";
import EnrollmentForm from "../../components/EnrollmentForm/EnrollmentForm";

function Hero() {
  const [enrollmentForm, setEnrollmentForm] = useState(false);

  const handleEnrollmentForm = () => {
    setEnrollmentForm(true);
  };

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
      <div className="sphere"></div>
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>San Bernardino Cuts and Cosmetology Institute</h1>
          <p>Cultivating the next generation of beauty industry leaders.</p>
          <Button onClick={handleEnrollmentForm} text="Learn More" />
        </div>
        <div className="hero-right">
          <div className="inner-hero-right">
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
            <div className="enroll-now">
              <h5>Open Enrollment!</h5>
              <Button
                onClick={handleEnrollmentForm}
                setEnrollmentForm={setEnrollmentForm}
                text="Enroll Now"
              />
            </div>
          </div>
        </div>
      </div>
      {enrollmentForm && (
        <EnrollmentForm setEnrollmentForm={setEnrollmentForm} />
      )}
    </div>
  );
}

export default Hero;
