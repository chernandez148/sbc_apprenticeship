import React, { useState } from "react";
import Hero from "../../sections/Hero/Hero";
import Highlights from "../../sections/Highlights/Highlights";
import About from "../../sections/About/About";
import Classes from "../../sections/Classes/Classes";
import Testimonials from "../../sections/Testimonials/Testimonials";
import Contact from "../../sections/Contact/Contact";
import ContactForm from "../../components/ContactForm/ContactForm";
import Banner from "../../sections/Banner/Banner";
import EnrollmentForm from "../../components/EnrollmentForm/EnrollmentForm";

function Home({
  enrollmentForm,
  setEnrollmentForm,
  setHighlightsModelBox,
  darkMode,
}) {
  const [contactForm, setContactForm] = useState(false);

  const handleEnrollmentForm = () => {
    setEnrollmentForm(true);
  };

  console.log(enrollmentForm);

  return (
    <div>
      {contactForm && (
        <ContactForm setContactForm={setContactForm} darkMode={darkMode} />
      )}
      {enrollmentForm && (
        <EnrollmentForm setEnrollmentForm={setEnrollmentForm} />
      )}
      <Hero
        enrollmentForm={enrollmentForm}
        setEnrollmentForm={setEnrollmentForm}
        handleEnrollmentForm={handleEnrollmentForm}
        darkMode={darkMode}
      />
      <Highlights
        darkMode={darkMode}
        setHighlightsModelBox={setHighlightsModelBox}
      />
      <About darkMode={darkMode} />
      <Classes darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Contact setContactForm={setContactForm} />
      <Banner
        setEnrollmentForm={setEnrollmentForm}
        handleEnrollmentForm={handleEnrollmentForm}
      />
    </div>
  );
}

export default Home;
