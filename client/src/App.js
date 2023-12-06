import React, { useState } from 'react';
import Components from './components/Components';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import './styles.css'

function App() {
  const [enrollmentForm, setEnrollmentForm] = useState(false)

  return (
    <div className="App" style={{ height: enrollmentForm ? "100vh" : "", overflowY: enrollmentForm ? "hidden" : "" }}>
      <Components />
      <div className='app-wrapper'>
        <Navbar />
        <Home setEnrollmentForm={setEnrollmentForm} enrollmentForm={enrollmentForm} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
