import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import dots from '../../assets/dots.png'
import darkDots from '../../assets/dark-dots.png'
import "./styles.css";

function Testimonials({ darkMode }) {
  const [reviewData, setReviewData] = useState([]);

  const navigateToPage = () => {
    window.open('https://www.yelp.com/biz/san-bernardino-cuts-apprenticeship-san-bernardino');
  };

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer rkRLe3LDGZayhnqm6q8V_eX9LngJTZIBhsaMV5pMRoz6Scdip5PgPLyTGdm0da2bqS3MJhOBntexZIPZx8rq78aCio3fOotnudenE9v2Zx7gJFIIzqfcNn1kfCeZZHYx",
    },
  };

  useEffect(() => {
    axios
      .get("https://app.sbcapprenticeship.com/api/reviews", options, { mode: "cors" })
      .then((response) => {
        setReviewData(response.data);
      })
  }, []);

  return (
    <div className="Testimonials">
      <img className="dots-bg" src={darkMode ? dots : darkDots} width="100%" alt="background dots" />
      <div className="testimonials-wrapper" >
        <div className="testimonials-left">
          <h4>TESTIMONIALS</h4>
          <h1>What Our Students Have To Say</h1>
          <p>
            Hear directly from our students about their transformative
            experiences and success stories at our academy.
          </p>
          <Button text="Don't forget to leave a review!" onClick={navigateToPage} />
        </div>
        <div className="testimonials-right">
          <Carousel>
            {reviewData.reviews?.map((review, index) => (
              <CarouselItem key={index}>
                <div className="review-card">
                  <img
                    src={review.user.image_url}
                    alt={review.user.name}
                    width="75px"
                    height="75px"
                  />
                  <p>{review.text}</p>
                  <h4>{review.user.name}</h4>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
