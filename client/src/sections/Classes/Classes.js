import React, { useState, useRef, useEffect } from "react";
import barberClass from "../../assets/barber-class.jpg";
import razorBlade from "../../assets/razor-blade.png";
import cosmetologyClass from "../../assets/cosmetology-class.jpg";
import hairDryer from "../../assets/hair-dryer.png";
import scissors from "../../assets/scissors.png";
import Card from "../../components/Card/Card";
import "./styles.css";

function Classes() {
  const [translateX, setTranslateX] = useState(0);
  const [firstCardWidth, setFirstCardWidth] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isLastCardVisible, setIsLastCardVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const classes = [
    {
      backgroundImage: barberClass,
      img: barberClass,
      title: "Barber Class",
      logo: razorBlade,
      alt: "Barber Class",
    },
    {
      backgroundImage: cosmetologyClass,
      img: cosmetologyClass,
      title: "Cosmetology Class",
      logo: hairDryer,
      alt: "Cosmetology Class",
    },
    {
      backgroundImage: barberClass,
      img: barberClass,
      title: "Barber Class",
      logo: razorBlade,
      alt: "Barber Class",
    },
    {
      backgroundImage: cosmetologyClass,
      img: cosmetologyClass,
      title: "Cosmetology Class",
      logo: hairDryer,
      alt: "Cosmetology Class",
    },
    {
      backgroundImage: barberClass,
      img: barberClass,
      title: "Barber Class",
      logo: razorBlade,
      alt: "Barber Class",
    },
    {
      backgroundImage: cosmetologyClass,
      img: cosmetologyClass,
      title: "Cosmetology Class",
      logo: hairDryer,
      alt: "Cosmetology Class",
    },
    {
      backgroundImage: barberClass,
      img: barberClass,
      title: "Barber Class",
      logo: razorBlade,
      alt: "Barber Class",
    },
    {
      backgroundImage: cosmetologyClass,
      img: cosmetologyClass,
      title: "Cosmetology Class",
      logo: hairDryer,
      alt: "Cosmetology Class",
    },
    {
      backgroundImage: barberClass,
      img: barberClass,
      title: "Barber Class",
      logo: razorBlade,
      alt: "Barber Class",
    },
    {
      backgroundImage: cosmetologyClass,
      img: cosmetologyClass,
      title: "Cosmetology Class",
      logo: hairDryer,
      alt: "Cosmetology Class",
    },
  ];

  const firstCardRef = useRef();
  const lastCardRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (firstCardRef.current) {
        setFirstCardWidth(firstCardRef.current.offsetWidth);
        // Reset translateX to 0 when screen size changes
        setTranslateX(0);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null, // viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // You can adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      const lastCardEntry = entries[entries.length - 1];
      setIsLastCardVisible(lastCardEntry.isIntersecting);
    }, options);

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      // Disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleNext = async () => {
    if (isButtonClicked) {
      return; // If the button is already clicked, exit the function
    }

    setIsButtonClicked(true); // Set button click to true

    // Wait for the observer to update isLastCardVisible
    await wait(100); // Adjust the delay time as needed

    if (!isLastCardVisible) {
      setTranslateX((prevTranslateX) => prevTranslateX - firstCardWidth - 16);
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    }

    setIsButtonClicked(false); // Reset button click state
  };

  const handlePrev = () => {
    setTranslateX((prevTranslateX) => prevTranslateX + firstCardWidth + 16);
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="Classes">
      <img className="scissors floating" src={scissors} alt="scissors" />
      <div className="classes-wrapper">
        <div className="carousel">
          {classes.map((card, index) => (
            <div
              className="carousel-card"
              key={index}
              ref={(element) => {
                if (index === 0) {
                  firstCardRef.current = element;
                } else if (index === classes.length - 1) {
                  lastCardRef.current = element;
                }
              }}
              style={{
                transform: `translateX(${translateX}px)`,
              }}
            >
              <Card
                index={index}
                logo={card.logo}
                image={card.img}
                alt={card.alt}
                title={card.title}
                backgroundImage={card.backgroundImage}
              />
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          <button disabled={translateX >= 0} onClick={handlePrev}>
            Prev
          </button>
          <button
            disabled={isLastCardVisible || isButtonClicked}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Classes;
