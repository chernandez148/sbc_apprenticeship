import React from 'react'
import about from '../../assets/about.jpg'
import './styles.css'

function About({ darkMode }) {
    return (
        <div className='About'>
            <div className='about-wrapper'>
                <div className='about-left' >
                    <img src={about} alt='owners' />
                </div>
                <div className='about-right'>
                    <h4>ABOUT US</h4>
                    <h1>Fostering the upcoming leaders of the beauty <span className='accent'>industry</span>.</h1>
                    <p>
                        San Bernardino Cuts Barbering and Cosmetology Institute, known as SBCutsB&C Institute, is dedicated to education that prepares students for the rigorous examination conducted by the California Department of Consumer Affairs Board of Barbering and Cosmetology. This examination serves as the benchmark for determining their eligibility to obtain a professional license in the state of California. Our primary mission is to uphold the highest ethical standards and enforce the laws governing the barbering and beauty industry, all in the interest of safeguarding the health and well-being of consumers throughout California.
                    </p>
                    <p className='snd-paragraph'>
                        At SBCutsB&C Institute, we offer a comprehensive educational and training program that covers a wide range of services commonly requested by clients in professional barbershops and salons. Our commitment is to provide you with the most current and cutting-edge methods and techniques in the industry.
                    </p>
                    <a className={`${darkMode ? "dark-link" : "light-link"}`} href='tel:+19093840792'>Call now</a>
                </div>
            </div>
        </div>
    )
}

export default About