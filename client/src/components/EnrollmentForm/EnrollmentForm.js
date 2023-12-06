import React from "react";
import Button from "../Button/Button";
import "./styles.css";

function EnrollmentForm({ setEnrollmentForm }) {
  const handleCloseEnrollmentForm = () => {
    setEnrollmentForm(false);
  };

  return (
    <div className="EnrollmentForm">
      <div className="enrollment-form-wrapper">
        <h4>Enroll Now!</h4>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbbd-Y0mdkOIYJxH3IbCk9udAjJS_ahsecGTPcfX5-g5kALQ/viewform?usp=sf_link">
          Enroll Now!
        </a>
        <Button text="Close" onClick={handleCloseEnrollmentForm} />
      </div>
    </div>
  );
}

export default EnrollmentForm;
