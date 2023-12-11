import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { BsMoonFill } from "react-icons/bs";
import { HiMiniSun } from "react-icons/hi2";
import './styles.css'

function App() {
  const [enrollmentForm, setEnrollmentForm] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className={`App ${darkMode ? "dark-bg light-text" : "light-bg dark-text"}`} style={{ height: enrollmentForm ? "100vh" : "", overflowY: enrollmentForm ? "hidden" : "" }}>
      <button onClick={handleDarkMode} className='dark-mode'>{darkMode ? <HiMiniSun color='white' size={36} /> : <BsMoonFill size={36} />}</button>
      <div className='app-wrapper'>
        <Home setEnrollmentForm={setEnrollmentForm} enrollmentForm={enrollmentForm} darkMode={darkMode} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
