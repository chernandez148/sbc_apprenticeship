import React, { useState } from 'react'
import Hero from '../../sections/Hero/Hero'
import Highlights from '../../sections/Highlights/Highlights'
import About from '../../sections/About/About'
import Classes from '../../sections/Classes/Classes'
import Testimonials from '../../sections/Testimonials/Testimonials'
import Contact from '../../sections/Contact/Contact'
import ContactForm from '../../components/ContactForm/ContactForm'
import Banner from '../../sections/Banner/Banner'

function Home() {
    const [contactForm, setContactForm] = useState(false)

    return (
        <div>
            {
                contactForm && (
                    <ContactForm setContactForm={setContactForm} />
                )
            }
            <Hero />
            <Highlights />
            <About />
            <Classes />
            <Testimonials />
            <Contact setContactForm={setContactForm} />
            <Banner />
        </div>
    )
}

export default Home