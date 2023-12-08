import React from 'react'
import enroll from '../../assets/enroll.jpg'
import blob from '../../assets/blob.png'
import Button from '../../components/Button/Button'
import './styles.css'

function Banner({ handleEnrollmentForm }) {
    return (
        <div className='Banner'>
            <div className='banner-wrapper'>
                <div className='inner-banner-wrapper'>
                    <div className='banner-left'>
                        <div className='inner-left-banner'>
                            <h2>Start your career</h2>
                            <h1>Enroll Now <br /> to Save Your Spot</h1>
                            <Button
                                onClick={handleEnrollmentForm}
                                text="Get Pre-Approved Now!"
                            />
                        </div>
                    </div>
                    <div className='banner-right'>
                        <div className='blob'>
                            <img className='blob-img floating' src={blob} width="500px" />
                            <img className='banner-img' src={enroll} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner