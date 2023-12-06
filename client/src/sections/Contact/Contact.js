import React from 'react'
import scissors from '../../assets/scissors.png'
import './styles.css'

function Contact({ setContactForm }) {

    const handleContactForm = () => {
        setContactForm(true)
    }

    return (
        <div className='Contact'>
            <div className='contact-wrapper'>
                <img className='floating' src={scissors} width="100px" height="100px" />
                <div className='inner-wrapper'>
                    <div className='email'>
                        <h3>Get In Touch:</h3>
                        <h2>Email us <span className='trigger-text' onClick={handleContactForm}>here</span></h2>
                    </div>
                    <h3>OR</h3>
                    <div className='phone'>
                        <h3>Call Us At:</h3>
                        <h2>(909) 384-0792</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact