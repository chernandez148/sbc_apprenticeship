import React from 'react'
import logo from '../../assets/logo.png'
import { IoLocationSharp, IoPhonePortraitOutline } from "react-icons/io5";
import './styles.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-wrapper'>
                <div className='about-logo'>
                    <div className='logo-info'>
                        <img src={logo} width="100px" />
                        <h3>San Bernardino Cuts Barbering and Cosmetology Institute
                        </h3>
                    </div>
                    <p>We are a State Board-approved program that provides the apprentice with the required related supplemental training that has been approved by the State Board of Barbering and Cosmetology</p>
                </div>
                <div className='contact-us'>
                    <h3>Contact Us</h3>
                    <div className='underline'></div>
                    <ul className='contact'>
                        <li><IoLocationSharp size={24} /><a>182 5th St, San Bernardino, CA 92401</a></li>
                        <li><IoPhonePortraitOutline size={24} /><a>(909) 384-0792</a></li>
                    </ul>
                </div>
                <div className='links'>
                    <h3>Subscribe</h3>
                    <div className='underline'></div>
                    <div class="ml-embedded" data-form="qczUud" id='footer-form'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer