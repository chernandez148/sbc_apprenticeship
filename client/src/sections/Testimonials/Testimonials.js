import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import "./styles.css";

function Testimonials() {
  const [reviewData, setReviewData] = useState([]);
  const [error, setError] = useState("");
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer rkRLe3LDGZayhnqm6q8V_eX9LngJTZIBhsaMV5pMRoz6Scdip5PgPLyTGdm0da2bqS3MJhOBntexZIPZx8rq78aCio3fOotnudenE9v2Zx7gJFIIzqfcNn1kfCeZZHYx",
    },
  };

  useEffect(() => {
    axios
      .get("https://app.christianhernandez.ca/api/reviews", options)
      .then((response) => {
        setReviewData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="Testimonials">
      <div className="testimonials-wrapper">
        <div className="testimonials-left">
          <h4>TESTIMONIALS</h4>
          <h1>What Our Students Have To Say</h1>
          <p>
            Hear directly from our students about their transformative
            experiences and success stories at our academy.
          </p>
          <Button text="Get-Pre Approved Now!" />
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
